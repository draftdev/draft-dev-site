'use client'

import React from 'react'

// Liquid-glass treatment: a distortion-filtered backdrop blur, a translucent
// white wash, and a specular inner highlight. Intentionally no outer border
// and no outer drop shadow.
export function GlassEffect({
  children,
  className = '',
  rounded = 'rounded-2xl',
}: {
  children: React.ReactNode
  className?: string
  rounded?: string
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <div
        className={`absolute inset-0 z-0 overflow-hidden ${rounded}`}
        style={{
          backdropFilter: 'blur(3px)',
          filter: 'url(#glass-distortion)',
          isolation: 'isolate',
        }}
      />
      <div
        className={`absolute inset-0 z-10 ${rounded}`}
        style={{ background: 'rgba(255, 255, 255, 0.25)' }}
      />
      <div
        className={`absolute inset-0 z-20 overflow-hidden ${rounded}`}
        style={{
          boxShadow:
            'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
        }}
      />
      <div className="relative z-30 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  )
}

// Render once per page that uses GlassEffect: the displacement filter the
// backdrop layer references for the "liquid" ripple in the refraction.
export function GlassFilter() {
  return (
    <svg style={{ display: 'none' }} aria-hidden="true">
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.005"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="200"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  )
}
