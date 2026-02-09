import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const ContentsquareTracker = (): null => {
  const location = useLocation()
  const hasTrackedInitialPage = useRef(false)

  useEffect(() => {
    window._uxa = window._uxa ?? []

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true
      return
    }

    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
    window._uxa.push(['trackPageview', currentPath])
  }, [location])

  return null
}

export default ContentsquareTracker
