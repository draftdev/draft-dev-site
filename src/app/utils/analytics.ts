export const GA_TRACKING_ID = 'G-N4PJMERESN'
export const GTM_ID = 'GTM-5W5755G3'

type EventProps = {
  action: string
  category: string
  label?: string
  value?: number
}

// Track page views
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }

  // For direct GA4 tracking (if used alongside GTM)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: EventProps): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    })
  }

  // For direct GA4 tracking (if used alongside GTM)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Improved scroll tracking using Intersection Observer
export const trackScroll = (): (() => void) => {
  if (
    typeof document === 'undefined' ||
    typeof window === 'undefined' ||
    typeof IntersectionObserver === 'undefined'
  ) {
    return () => {}
  }

  // Track whether thresholds have been passed
  const thresholdsPassed = {
    '25': false,
    '50': false,
    '75': false,
    '90': false,
  }

  // Create markers for scroll depths
  const createMarker = (id: string, percentPosition: number) => {
    const marker = document.createElement('div')
    marker.id = id
    marker.style.position = 'absolute'
    marker.style.top = `${percentPosition}%`
    marker.style.height = '1px'
    marker.style.width = '1px'
    marker.style.opacity = '0'
    marker.style.pointerEvents = 'none'
    return marker
  }

  // Create a wrapper that spans full document height
  const wrapper = document.createElement('div')
  wrapper.style.position = 'absolute'
  wrapper.style.top = '0'
  wrapper.style.left = '0'
  wrapper.style.width = '1px'
  wrapper.style.height = '100%'
  wrapper.style.opacity = '0'
  wrapper.style.pointerEvents = 'none'
  wrapper.style.zIndex = '-1'

  // Add markers for different scroll depths
  const marker25 = createMarker('scroll-25', 25)
  const marker50 = createMarker('scroll-50', 50)
  const marker75 = createMarker('scroll-75', 75)
  const marker90 = createMarker('scroll-90', 90)

  wrapper.appendChild(marker25)
  wrapper.appendChild(marker50)
  wrapper.appendChild(marker75)
  wrapper.appendChild(marker90)
  document.body.appendChild(wrapper)

  // Create Intersection Observer for scroll depth tracking
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const id = entry.target.id

        if (id === 'scroll-25' && !thresholdsPassed['25']) {
          thresholdsPassed['25'] = true
          window.dataLayer.push({
            event: 'scroll',
            eventCategory: 'scroll',
            eventLabel: 'scroll_depth_25',
            eventValue: 25,
          })
        } else if (id === 'scroll-50' && !thresholdsPassed['50']) {
          thresholdsPassed['50'] = true
          window.dataLayer.push({
            event: 'scroll',
            eventCategory: 'scroll',
            eventLabel: 'scroll_depth_50',
            eventValue: 50,
          })
        } else if (id === 'scroll-75' && !thresholdsPassed['75']) {
          thresholdsPassed['75'] = true
          window.dataLayer.push({
            event: 'scroll',
            eventCategory: 'scroll',
            eventLabel: 'scroll_depth_75',
            eventValue: 75,
          })
        } else if (id === 'scroll-90' && !thresholdsPassed['90']) {
          thresholdsPassed['90'] = true
          window.dataLayer.push({
            event: 'scroll',
            eventCategory: 'scroll',
            eventLabel: 'scroll_depth_90',
            eventValue: 90,
          })

          // After 90% scroll, disconnect the observer
          scrollObserver.disconnect()
        }
      })
    },
    {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px', // Triggers slightly before the element comes into view
    },
  )

  // Observe markers
  scrollObserver.observe(marker25)
  scrollObserver.observe(marker50)
  scrollObserver.observe(marker75)
  scrollObserver.observe(marker90)

  // Return cleanup function
  return () => {
    scrollObserver.disconnect()
    if (document.body.contains(wrapper)) {
      document.body.removeChild(wrapper)
    }
  }
}

// Initialize user interaction tracking
export const initUserInteractionTracking = (): (() => void) => {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    // Return empty cleanup function
    return () => {}
  }

  // Track first click
  let firstClickTracked = false
  const trackFirstClick = () => {
    if (!firstClickTracked) {
      window.dataLayer.push({
        event: 'first_click',
        eventCategory: 'user_interaction',
        eventLabel: 'first_click',
      })
      firstClickTracked = true
    }
  }

  // Track first hover
  let firstHoverTracked = false
  const trackFirstHover = () => {
    if (!firstHoverTracked) {
      window.dataLayer.push({
        event: 'first_hover',
        eventCategory: 'user_interaction',
        eventLabel: 'first_hover',
      })
      firstHoverTracked = true
    }
  }

  // Track engagement time
  const engagementTimeouts = {
    '10': setTimeout(() => {
      window.dataLayer.push({
        event: 'engagement_time',
        eventCategory: 'user_engagement',
        eventLabel: 'time_on_page_10s',
        eventValue: 10,
      })
    }, 10000),
    '30': setTimeout(() => {
      window.dataLayer.push({
        event: 'engagement_time',
        eventCategory: 'user_engagement',
        eventLabel: 'time_on_page_30s',
        eventValue: 30,
      })
    }, 30000),
    '60': setTimeout(() => {
      window.dataLayer.push({
        event: 'engagement_time',
        eventCategory: 'user_engagement',
        eventLabel: 'time_on_page_60s',
        eventValue: 60,
      })
    }, 60000),
  }

  // Setup event listeners
  document.addEventListener('click', trackFirstClick, { once: true })
  document.addEventListener('mouseover', trackFirstHover, { once: true })

  // Return cleanup function
  return () => {
    document.removeEventListener('click', trackFirstClick)
    document.removeEventListener('mouseover', trackFirstHover)
    clearTimeout(engagementTimeouts['10'])
    clearTimeout(engagementTimeouts['30'])
    clearTimeout(engagementTimeouts['60'])
  }
}
