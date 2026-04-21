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
    q: "Am I eligible to vote?",
    a: "You must be an Indian citizen and 18 years or older on the qualifying date (usually Jan 1st, April 1st, July 1st, or Oct 1st of the year). You must also reside at your current address."
  },
  {
    q: "How do I register to vote?",
    a: "You need to fill out Form 6 online via the Voter Portal (voters.eci.gov.in) with your age and address proof."
  },
  {
    q: "What if there is a mistake in my Voter ID?",
    a: "Submit Form 8 for any corrections. You will need to upload proof of the correct information."
  },
  {
    q: "Can I vote if my name is not on the voter list?",
    a: "No. Just having a Voter ID (EPIC) is not enough. Your name MUST be on the electoral roll of your polling booth."
  }
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
