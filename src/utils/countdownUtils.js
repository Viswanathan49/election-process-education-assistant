/**
 * countdownUtils.js
 * Pure, side-effect-free utility functions for the May 4th Results Day countdown.
 * Extracted from ElectionTimelineDrawer so they can be independently unit-tested.
 */

export const RESULT_DAY = new Date('2026-05-04T06:00:00+05:30');

/**
 * Compute remaining time between `now` and the RESULT_DAY target.
 * @param {Date} now - The current timestamp.
 * @returns {{ done: boolean, days?: number, hours?: number, minutes?: number, seconds?: number }}
 */
export function computeCountdown(now) {
  const diff = RESULT_DAY - now;

  if (diff <= 0) {
    return { done: true };
  }

  return {
    done: false,
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

/**
 * Determine poll phase status relative to today.
 * @param {'kerala'|'tn'|'wb_phase1'|'wb_phase2'} pollKey
 * @param {Date} now
 * @returns {'concluded'|'live'|'upcoming'}
 */
export function getPollStatus(pollKey, now) {
  const pollDates = {
    kerala:     new Date('2026-04-09T00:00:00+05:30'),
    tn:         new Date('2026-04-23T00:00:00+05:30'),
    wb_phase1:  new Date('2026-04-23T00:00:00+05:30'),
    wb_phase2:  new Date('2026-04-29T00:00:00+05:30'),
  };

  const date = pollDates[pollKey];
  if (!date) throw new Error(`Unknown poll key: ${pollKey}`);

  // Same-day counts as 'live' (polling day), past = concluded
  const dayAfter = new Date(date);
  dayAfter.setDate(dayAfter.getDate() + 1);

  if (now >= dayAfter) return 'concluded';
  if (now >= date)     return 'live';
  return 'upcoming';
}
