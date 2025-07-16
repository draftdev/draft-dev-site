'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    HubSpotConversations?: any
  }
}

const HubSpotMeetings = () => {
  useEffect(() => {
    // Initialize HubSpot embed after script loads
    const initializeEmbed = () => {
      if (window.HubSpotConversations) {
        // HubSpot script loaded, embed should work
      }
    }

    // Check if script is already loaded
    if (document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
      initializeEmbed()
    }
  }, [])

  return (
    <>
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="lazyOnload"
      />
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/karl-hughes?embed=true"
      />
    </>
  )
}

export default HubSpotMeetings
