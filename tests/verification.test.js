import { describe, it, expect } from 'vitest';
import { checkQueryBias, isStateElectionQuery } from '../src/utils/verificationLayer';

describe('Verification Layer (Guardrails)', () => {
  
  describe('checkQueryBias()', () => {
    it('should detect biased query: "who should i vote for?"', () => {
      expect(checkQueryBias('who should i vote for?')).toBe(true);
    });

    it('should detect biased query: "best party in elections"', () => {
      expect(checkQueryBias('best party in elections')).toBe(true);
    });

    it('should detect biased query: "who will win the election"', () => {
      expect(checkQueryBias('who will win the election')).toBe(true);
    });

    it('should NOT detect bias in neutral query: "how to register as a voter"', () => {
      expect(checkQueryBias('how to register as a voter')).toBe(false);
    });

    it('should NOT detect bias in neutral query: "documents for form 6"', () => {
      expect(checkQueryBias('documents for form 6')).toBe(false);
    });
  });

  describe('isStateElectionQuery()', () => {
    it('should identify Kerala-specific query', () => {
      expect(isStateElectionQuery('kerala election results')).toBe(true);
    });

    it('should identify TN-specific query', () => {
      expect(isStateElectionQuery('tamil nadu polling status')).toBe(true);
    });

    it('should identify general result query', () => {
      expect(isStateElectionQuery('when are the results?')).toBe(true);
    });

    it('should NOT identify non-election query', () => {
      expect(isStateElectionQuery('how to update my address')).toBe(false);
    });
  });

});
