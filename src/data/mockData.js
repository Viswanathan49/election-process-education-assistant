export const forms = [
  {
    id: "form-6",
    title: "Form 6 (New Registration)",
    description: "Application for inclusion of name in electoral roll for first-time voters or shifting from one constituency to another.",
    who: "First-time voters (18+ years) or people moving into a new constituency.",
    link: "https://voters.eci.gov.in/"
  },
  {
    id: "form-7",
    title: "Form 7 (Deletion or Objection)",
    description: "Application for objecting inclusion or seeking deletion of name in electoral roll.",
    who: "People reporting death, shifted voters, or duplicate entries.",
    link: "https://voters.eci.gov.in/"
  },
  {
    id: "form-8",
    title: "Form 8 (Correction or Shifting)",
    description: "Application for correction of particulars, shifting of residence within assembly, or replacement of EPIC.",
    who: "Voters needing to correct name, address, photo, or those moving within the same constituency.",
    link: "https://voters.eci.gov.in/"
  }
];

export const documents = [
  {
    type: "Age Proof",
    items: ["Birth Certificate", "Aadhaar Card", "PAN Card", "Driving License", "10th/12th Class Certificate"]
  },
  {
    type: "Address Proof",
    items: ["Water/Electricity/Gas Bill (Recent)", "Aadhaar Card", "Current Passbook of Bank/Post Office", "Indian Passport", "Registered Rent Agreement"]
  },
  {
    type: "Identity Proof",
    items: ["Aadhaar Card", "PAN Card", "Driving License", "Passport", "Student ID Card with Photo"]
  }
];

export const faqData = [
  {
    category: "Registration",
    q: "How do I register as a first-time voter?",
    a: "Fill out Form 6 online via the Voter Service Portal (voters.eci.gov.in) and attach your age and address proofs."
  },
  {
    category: "Registration",
    q: "Am I eligible to vote?",
    a: "You must be an Indian citizen and 18 years or older on the qualifying date (usually Jan 1st, April 1st, July 1st, or Oct 1st). You must also reside at your current address."
  },
  {
    category: "Forms",
    q: "What is Form 6 used for?",
    a: "Form 6 is for new voter registration. If you've never voted before or are shifting to a new constituency, use this."
  },
  {
    category: "Forms",
    q: "What is the difference between Form 7 and Form 8?",
    a: "Form 7 is to delete a name (e.g. death or duplicate). Form 8 is to correct mistakes like name spelling or shift address within the same constituency."
  },
  {
    category: "Documents",
    q: "What documents do I need to register?",
    a: "You generally need one age proof (Birth Certificate, 10th marksheet) and one address proof (Aadhaar, utility bill)."
  },
  {
    category: "Corrections",
    q: "How do I correct my voter details?",
    a: "Submit Form 8. You will need to attach documents proving the correct spelling or address."
  },
  {
    category: "Corrections",
    q: "Can I update my photo or address?",
    a: "Yes! Use Form 8 for any updates including a photo change, address shift, or name correction."
  },
  {
    category: "Corrections",
    q: "I shifted to another constituency, what should I do?",
    a: "If it is a new assembly constituency, fill out Form 6 as a new voter. If it is within the same constituency, fill out Form 8."
  },
  {
    category: "Polling day",
    q: "What should I carry on polling day?",
    a: "Carry your original Voter ID (EPIC). If you don't have it, bring an approved alternative like Aadhaar, PAN card, or Passport."
  },
  {
    category: "Polling day",
    q: "How do I know if my name is in the voter list?",
    a: "Search your name using your EPIC number on the electoral search portal (electoralsearch.eci.gov.in) before election day."
  },
  {
    category: "Election timelines",
    q: "What happens after I submit the form?",
    a: "Your application is verified by Electoral Registration Officers, potentially involving a home visit from a Booth Level Officer (BLO)."
  },
  {
    category: "Election timelines",
    q: "How long does verification take?",
    a: "It usually takes a few weeks depending on the election cycle. You can track your application status on the portal."
  },
  {
    category: "Election timelines",
    q: "Where can I verify official election dates?",
    a: "Always check eci.gov.in or your state's CEO website for verified election schedules."
  }
];

export const upcomingElections = [
  { state: "Assam", type: "Legislative Assembly", expected: "April-May 2026", status: "TBD" },
  { state: "Kerala", type: "Legislative Assembly", expected: "April-May 2026", status: "TBD" },
  { state: "Tamil Nadu", type: "Legislative Assembly", expected: "April-May 2026", status: "TBD" },
  { state: "West Bengal", type: "Legislative Assembly", expected: "April-May 2026", status: "TBD" },
  { state: "Puducherry", type: "Legislative Assembly", expected: "April-May 2026", status: "TBD" },
];

export const workflowSteps = {
  registration: [
    { title: "Check Eligibility", detail: "Ensure you are 18+ and an Indian citizen." },
    { title: "Gather Documents", detail: "Collect Age Proof, Address Proof, and a passport-size photo." },
    { title: "Submit Form 6", detail: "Apply online at Voter Service Portal or Voter Helpline App." },
    { title: "BLO Verification", detail: "A Booth Level Officer may visit your address to verify." },
    { title: "Check Status", detail: "Track application online until your name is added to the roll." }
  ],
  polling: [
    { title: "Check Voter List", detail: "Search your name online to find your exact Polling Station." },
    { title: "Carry ID", detail: "Take your original Voter ID or an approved alternative ID (like Aadhaar)." },
    { title: "At the Booth", detail: "Stand in queue. Officers will check your ID and ink your finger." },
    { title: "Cast Vote", detail: "Press the button next to your chosen candidate on the EVM. Wait for the beep." },
    { title: "Check VVPAT", detail: "Verify the printed slip in the machine for 7 seconds." }
  ]
};
