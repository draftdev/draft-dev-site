export type JsonExpectation = 'array' | 'object' | 'any'

export interface ParseJsonFieldOptions<T> {
  fallback: T
  expect?: JsonExpectation
  fieldName?: string
  slug?: string
}

const CODE_FENCE_REGEX = /```(?:json)?\s*([\s\S]*?)\s*```/i

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function matchesExpectation(
  value: unknown,
  expect: JsonExpectation | undefined,
): boolean {
  if (expect === 'array') return Array.isArray(value)
  if (expect === 'object') return isPlainObject(value)
  return Array.isArray(value) || isPlainObject(value)
}

function normalizeJsonString(input: string): string {
  return input
    .trim()
    .replace(/\r\n?/g, '\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
}

function stripCodeFences(input: string): string {
  const match = input.match(CODE_FENCE_REGEX)
  return match ? match[1].trim() : input
}

function extractFirstJsonBlock(input: string): string | null {
  const startIndex = input.search(/[\[{]/)
  if (startIndex === -1) return null

  const opener = input[startIndex]
  const closer = opener === '{' ? '}' : ']'
  let depth = 0
  let inString = false
  let stringChar = ''
  let escaped = false

  for (let i = startIndex; i < input.length; i += 1) {
    const char = input[i]

    if (inString) {
      if (escaped) {
        escaped = false
        continue
      }
      if (char === '\\') {
        escaped = true
        continue
      }
      if (char === stringChar) {
        inString = false
        stringChar = ''
      }
      continue
    }

    if (char === '"' || char === "'") {
      inString = true
      stringChar = char
      continue
    }

    if (char === opener) {
      depth += 1
      continue
    }

    if (char === closer) {
      depth -= 1
      if (depth === 0) {
        return input.slice(startIndex, i + 1)
      }
    }
  }

  return null
}

function logJsonWarning(
  message: string,
  options: ParseJsonFieldOptions<unknown>,
  error?: unknown,
): void {
  const context = [
    options.fieldName ? `field=${options.fieldName}` : null,
    options.slug ? `slug=${options.slug}` : null,
  ]
    .filter(Boolean)
    .join(' ')

  const suffix = context ? ` (${context})` : ''
  const detail = error instanceof Error ? `: ${error.message}` : ''
  console.warn(`Warning: ${message}${suffix}${detail}`)
}

export function parseJsonField<T>(
  input: unknown,
  options: ParseJsonFieldOptions<T>,
): T {
  if (input == null) {
    return options.fallback
  }

  if (typeof input !== 'string') {
    if (matchesExpectation(input, options.expect)) {
      return input as T
    }
    logJsonWarning('JSON field type mismatch', options)
    return options.fallback
  }

  let text = normalizeJsonString(input)
  if (!text) {
    return options.fallback
  }

  text = stripCodeFences(text)

  const extracted = extractFirstJsonBlock(text)
  const candidate = extracted ?? text

  const sanitized = candidate.replace(/,\s*([}\]])/g, '$1')

  try {
    const parsed = JSON.parse(sanitized)
    if (!matchesExpectation(parsed, options.expect)) {
      logJsonWarning('Parsed JSON does not match expected shape', options)
      return options.fallback
    }
    return parsed as T
  } catch (error) {
    logJsonWarning('Failed to parse JSON', options, error)
    return options.fallback
  }
}
