/**
 * tests/countdown.test.js
 * Jest test suite for the May 4th Results Day countdown logic.
 * Tests the pure utility functions in src/utils/countdownUtils.js.
 */

import { describe, it, expect } from '@jest/globals';
import { computeCountdown, getPollStatus, RESULT_DAY } from '../src/utils/countdownUtils.js';

// ─── RESULT_DAY constant ────────────────────────────────────────────────────

describe('RESULT_DAY', () => {
  it('should be May 4 2026 at 06:00 IST', () => {
    expect(RESULT_DAY.getUTCFullYear()).toBe(2026);
    expect(RESULT_DAY.getUTCMonth()).toBe(4);      // May = index 4
    expect(RESULT_DAY.getUTCDate()).toBe(4);        // 4th UTC (06:00 IST = 00:30 UTC)
  });

  it('should be a valid Date object', () => {
    expect(RESULT_DAY instanceof Date).toBe(true);
    expect(isNaN(RESULT_DAY.getTime())).toBe(false);
  });
});

// ─── computeCountdown ────────────────────────────────────────────────────────

describe('computeCountdown()', () => {
  it('returns done=true when now is exactly on result day', () => {
    const result = computeCountdown(RESULT_DAY);
    expect(result.done).toBe(true);
  });

  it('returns done=true when now is after result day', () => {
    const after = new Date(RESULT_DAY.getTime() + 1000);
    expect(computeCountdown(after).done).toBe(true);
  });

  it('returns done=false with valid fields when now is before result day', () => {
    const before = new Date(RESULT_DAY.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 days before
    const result = computeCountdown(before);
    expect(result.done).toBe(false);
    expect(typeof result.days).toBe('number');
    expect(typeof result.hours).toBe('number');
    expect(typeof result.minutes).toBe('number');
    expect(typeof result.seconds).toBe('number');
  });

  it('calculates exactly 1 day remaining correctly', () => {
    const oneDayBefore = new Date(RESULT_DAY.getTime() - 1 * 24 * 60 * 60 * 1000);
    const result = computeCountdown(oneDayBefore);
    expect(result.done).toBe(false);
    expect(result.days).toBe(1);    // exactly 24h = 1 full day
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it('calculates exactly 2 days remaining correctly', () => {
    const twoDaysBefore = new Date(RESULT_DAY.getTime() - 2 * 24 * 60 * 60 * 1000);
    const result = computeCountdown(twoDaysBefore);
    expect(result.done).toBe(false);
    expect(result.days).toBe(2);
  });

  it('days field is never negative', () => {
    const oneSecondBefore = new Date(RESULT_DAY.getTime() - 1000);
    const result = computeCountdown(oneSecondBefore);
    expect(result.days).toBeGreaterThanOrEqual(0);
  });

  it('hours field is between 0 and 23', () => {
    const before = new Date(RESULT_DAY.getTime() - 5 * 60 * 60 * 1000); // 5 hours before
    const result = computeCountdown(before);
    expect(result.hours).toBeGreaterThanOrEqual(0);
    expect(result.hours).toBeLessThanOrEqual(23);
  });

  it('minutes field is between 0 and 59', () => {
    const before = new Date(RESULT_DAY.getTime() - 30 * 60 * 1000); // 30 minutes before
    const result = computeCountdown(before);
    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.minutes).toBeLessThanOrEqual(59);
  });

  it('seconds field is between 0 and 59', () => {
    const before = new Date(RESULT_DAY.getTime() - 45 * 1000); // 45 seconds before
    const result = computeCountdown(before);
    expect(result.seconds).toBeGreaterThanOrEqual(0);
    expect(result.seconds).toBeLessThanOrEqual(59);
  });

  it('returns no day/hours/minutes/seconds keys when done=true', () => {
    const result = computeCountdown(RESULT_DAY);
    expect(result.days).toBeUndefined();
    expect(result.hours).toBeUndefined();
    expect(result.minutes).toBeUndefined();
    expect(result.seconds).toBeUndefined();
  });
});

// ─── getPollStatus ───────────────────────────────────────────────────────────

describe('getPollStatus()', () => {
  const BEFORE_KERALA  = new Date('2026-04-08T12:00:00+05:30'); // day before Kerala
  const ON_KERALA      = new Date('2026-04-09T10:00:00+05:30'); // polling day
  const AFTER_KERALA   = new Date('2026-04-10T00:00:00+05:30'); // day after
  const BEFORE_WB2     = new Date('2026-04-28T12:00:00+05:30');
  const ON_WB2         = new Date('2026-04-29T10:00:00+05:30');
  const AFTER_WB2      = new Date('2026-04-30T00:00:00+05:30');

  it('Kerala is "upcoming" before April 9', () => {
    expect(getPollStatus('kerala', BEFORE_KERALA)).toBe('upcoming');
  });

  it('Kerala is "live" on April 9', () => {
    expect(getPollStatus('kerala', ON_KERALA)).toBe('live');
  });

  it('Kerala is "concluded" after April 9', () => {
    expect(getPollStatus('kerala', AFTER_KERALA)).toBe('concluded');
  });

  it('Tamil Nadu is "concluded" on April 25 (today)', () => {
    const today = new Date('2026-04-25T12:00:00+05:30');
    expect(getPollStatus('tn', today)).toBe('concluded');
  });

  it('WB Phase 1 is "concluded" on April 25', () => {
    const today = new Date('2026-04-25T12:00:00+05:30');
    expect(getPollStatus('wb_phase1', today)).toBe('concluded');
  });

  it('WB Phase 2 is "upcoming" before April 29', () => {
    expect(getPollStatus('wb_phase2', BEFORE_WB2)).toBe('upcoming');
  });

  it('WB Phase 2 is "live" on April 29', () => {
    expect(getPollStatus('wb_phase2', ON_WB2)).toBe('live');
  });

  it('WB Phase 2 is "concluded" after April 29', () => {
    expect(getPollStatus('wb_phase2', AFTER_WB2)).toBe('concluded');
  });

  it('throws an error for an unknown poll key', () => {
    expect(() => getPollStatus('unknown_state', new Date())).toThrow('Unknown poll key: unknown_state');
  });

  it('TN and WB Phase 1 share the same poll date (Apr 23)', () => {
    const before = new Date('2026-04-22T12:00:00+05:30');
    expect(getPollStatus('tn', before)).toBe('upcoming');
    expect(getPollStatus('wb_phase1', before)).toBe('upcoming');
  });
});
