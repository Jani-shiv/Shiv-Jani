/**
 * Lightweight Analytics Abstraction Layer
 * Shiv Jani Personal Link Hub
 * 
 * Provides event tracking abstraction without breaking site execution
 * if analytics tools are omitted or blocked by ad-blockers.
 */

window.Analytics = (function () {
  'use strict';

  // Toggle true/false to enable or disable analytics logging/dispatching
  const ENABLED = false;

  /**
   * Track custom user interaction events
   * @param {string} eventName - e.g., 'link_click', 'theme_toggle', 'project_click'
   * @param {Object} eventParams - key-value details about the event
   */
  function trackEvent(eventName, eventParams = {}) {
    if (!ENABLED) return;

    try {
      // 1. Google Analytics 4 (gtag.js)
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
      }

      // 2. Plausible Analytics
      if (typeof window.plausible === 'function') {
        window.plausible(eventName, { props: eventParams });
      }

      // 3. Umami Analytics
      if (window.umami && typeof window.umami.track === 'function') {
        window.umami.track(eventName, eventParams);
      }

      // 4. Cloudflare Web Analytics / Console Debug Output
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[Analytics Event] ${eventName}:`, eventParams);
      }
    } catch (e) {
      // Never break application flow if analytics fails
    }
  }

  return {
    trackEvent: trackEvent
  };
})();
