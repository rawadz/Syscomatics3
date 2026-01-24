
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Language } from '../types';

// IMPORTANT: Replace this with your newly deployed Apps Script URL
const ANALYTICS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbweAg55F3K-pVYgFIby3ss4BpvTtS2mHQvvvf2SlhTU4um1-S1Xggps57ZWgD93Yorx/exec';

const getSessionId = () => {
  let sessionId = sessionStorage.getItem('sys_visitor_sid');
  if (!sessionId) {
    sessionId = `sid_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem('sys_visitor_sid', sessionId);
  }
  return sessionId;
};

/**
 * Fetches the user's public IP address.
 * Uses a free, lightweight service that doesn't require special permissions.
 */
const getUserIp = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'Unknown';
  } catch (err) {
    console.debug('IP fetch failed, likely ad-blocker or network restriction.');
    return 'Unknown';
  }
};

export interface VisitorLog {
  ip: string;
  sessionId: string;
  timestamp: string;
  view: string;
  language: Language;
  referrer: string;
  userAgent: string;
  platform: string;
  screenResolution: string;
  timezone: string;
}

/**
 * Logs a visitor interaction to the analytics endpoint.
 * Only collects data that DOES NOT require explicit browser permissions.
 */
export const logVisitorPing = async (viewPath: string, lang: Language) => {
  // Check if the endpoint has been configured (not containing the placeholder text)
  if (!ANALYTICS_ENDPOINT || ANALYTICS_ENDPOINT.includes('REPLACE-WITH-YOUR')) {
    console.debug('Analytics skipped: No endpoint configured.');
    return;
  }

  // Fetch IP in parallel with metadata collection
  const ip = await getUserIp();

  const payload: VisitorLog = {
    ip: ip,
    sessionId: getSessionId(),
    timestamp: new Date().toISOString(),
    view: viewPath,
    language: lang,
    referrer: document.referrer || 'Direct',
    userAgent: navigator.userAgent,
    platform: (navigator as any).userAgentData?.platform || navigator.platform || 'Unknown',
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  try {
    // We send as a fire-and-forget request. 
    // mode: 'no-cors' is required for Google Apps Script Web Apps when called from a browser.
    await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error('Analytics transmission failed:', err);
  }
};
