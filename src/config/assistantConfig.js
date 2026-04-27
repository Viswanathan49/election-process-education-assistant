/**
 * Configuration for the AI Assistant.
 * Moving hardcoded strings and guardrail terms here for security and maintainability.
 */

export const ASSISTANT_CONFIG = {
  biasedTerms: [
    'vote for', 
    'best party', 
    'which candidate', 
    'should i support', 
    'political opinion', 
    'who will win'
  ],
  
  stateElectionTerms: [
    'kerala', 
    'tamil nadu', 
    'tamilnadu', 
    'tn election', 
    'result', 
    'results', 
    'may 4', 
    'counting'
  ],

  neutralityResponse: {
    text: "As an educational assistant, I maintain strict non-partisan neutrality. I cannot provide political advice or candidate recommendations. Please refer to the official Election Commission of India (ECI) portal for unbiased information on candidates and manifestos.",
    structured: {
      meaning: "Contextual Guardrail: Non-partisan Neutrality",
      form: "N/A",
      docs: "N/A",
      next: "Visit the ECI KYC (Know Your Candidate) portal for official details.",
      link: "https://eci.gov.in/candidate-kyc/"
    }
  },

  welcomeMessage: "Welcome. TN and Kerala polling is complete. Counting starts May 4. How can I help you with post-poll data?"
};
