declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: HubSpotFormOptions) => void
      }
      analytics?: {
        track: (event: string, properties?: any) => void
      }
      cta?: {
        load: () => void
      }
    }
  }
}

interface HubSpotFormOptions {
  region: string
  portalId: string
  formId: string
  target: string | HTMLElement
  css?: string
  cssClass?: string
  submitText?: string
  redirectUrl?: string
  inlineMessage?: string
  hutk?: string
  pageId?: string
  pageName?: string
  contentType?: string
  formInstanceId?: string
  goToWebinarWebinarKey?: string
  locale?: string
  translations?: Record<string, any>
  manuallyBlockedEmailDomain?: string[]
  onBeforeFormInit?: (ctx: any) => void
  onFormReady?: (form: any) => void
  onFormSubmit?: (form: any) => void
  onFormSubmitted?: (form: any) => void
  onBeforeValidation?: (form: any, formData: any) => void
  onFormDefinitionFetchError?: (error: any) => void
  onFormValidationError?: (form: any) => void
  rawInlineMessage?: string
  rawRedirectUrl?: string
  formData?: Record<string, any>
}

export {}
