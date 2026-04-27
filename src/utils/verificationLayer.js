import { ASSISTANT_CONFIG } from '../config/assistantConfig';

/**
 * Verification Layer logic to check for biased queries.
 * This ensures the assistant remains non-partisan.
 */
export const checkQueryBias = (text) => {
  const lowerText = text.toLowerCase();
  return ASSISTANT_CONFIG.biasedTerms.some(term => lowerText.includes(term));
};

/**
 * Checks if the query is related to specific state election results.
 */
export const isStateElectionQuery = (text) => {
  const lowerText = text.toLowerCase();
  return ASSISTANT_CONFIG.stateElectionTerms.some(term => lowerText.includes(term));
};
