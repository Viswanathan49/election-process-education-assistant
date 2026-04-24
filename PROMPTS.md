# PROMPTS.md — Chain-of-Verification Strategy

## Overview

This document describes the prompt engineering strategy and logic architecture used in the **Election Process Education Assistant**, built for the **Prompt Wars Virtual Hackathon** using **Google Antigravity**.

The core principle is **"structured honesty"** — every user interaction should result in a clear, actionable, non-partisan, and verifiable output that cites official Election Commission of India (ECI) resources.

---

## 1. Prompt Architecture: Skill-Based Modular Design

The assistant was built using a **modular skill pattern**, where each page of the application represents a distinct "skill module":

| Module        | Skill                                | Logic Depth         |
|---------------|--------------------------------------|---------------------|
| Eligibility   | Branching eligibility checker        | Multi-step wizard   |
| Forms         | Form selection wizard                | Decision tree       |
| Workflow      | Step-by-step process guide           | Sequential flow     |
| Assistant     | Context-aware Q&A                    | Chip + guardrails   |
| Election Basics | Education layer                    | Reference card set  |
| Resources     | Curated link directory               | Categorized lookup  |

Each module was prompted to:
1. **Understand the user's specific scenario**, not just provide generic content.
2. **Identify the actionable next step**, not just describe the situation.
3. **Cite an official source** at every decision endpoint.

---

## 2. Chain-of-Verification Strategy

### Step 1: Intent Classification
Before any response is generated, the user's query is classified into one of three categories:
- **Procedural** (e.g., "How do I register?") → Route to Forms Wizard or Workflow.
- **Educational** (e.g., "What is NOTA?") → Route to Election Basics.
- **Biased/Political** (e.g., "Who should I vote for?") → Trigger Contextual Guardrail.

### Step 2: Response Generation
For **Procedural** queries, a structured response is generated containing:
```
What this means → Form to use → Documents needed → Next action → Official link
```

For **Educational** queries, content is drawn from the static knowledge modules.

### Step 3: Source Verification Gate
Every response is required to include a link to an official ECI resource. The verification gate checks for one of:
- `voters.eci.gov.in` — Voter registration and status
- `eci.gov.in` — Official ECI portal
- `voterportal.eci.gov.in` — NVSP portal
- `eci.gov.in/candidate-kyc/` — Candidate KYC portal

If a response is generated without a verified official link, the Chain-of-Verification re-runs the generation step to inject the appropriate citation.

---

## 3. Contextual Guardrails (Bias-Check Layer)

The assistant includes a **non-partisan neutrality system** that intercepts politically biased queries.

### Trigger Terms
The following terms activate the Guardrail:
- `vote for`
- `best party`
- `which candidate`
- `should i support`
- `political opinion`
- `who will win`

### Guardrail Response
When a guardrail is triggered, the assistant:
1. **Does not answer** the biased question.
2. **Explicitly states** that it maintains non-partisan neutrality.
3. **Redirects** the user to the ECI Candidate KYC portal for objective candidate information.

This ensures the tool cannot be used for political manipulation.

---

## 4. Educational Content Layer

The **Election Basics** page was designed as a structured knowledge base. The prompting strategy for this module was:

> *"Explain this concept to a first-time voter aged 18 who has no prior knowledge of the Indian political system. Use simple language, avoid legal jargon, and always conclude with the actionable implication for the voter."*

This resulted in definitions that are:
- **Accessible**: No complex terminology.
- **Actionable**: Each definition has a "so what" conclusion.
- **Non-partisan**: No party names, no candidate references.

---

## 5. Tone & Voice Guidelines

All content across the application follows this prompt-enforced tone:

| Quality        | Description                                          |
|----------------|------------------------------------------------------|
| Civic           | Empowers citizens, not political agents              |
| Non-legalistic  | Plain English, no Section/Clause references          |
| Actionable      | Every screen concludes with a clear next step        |
| Honest          | Clear disclaimers where official verification needed |
| Trustworthy     | All external links point to `.gov.in` domains only   |

---

## 6. Verification & Accuracy Safeguards

1. **No Fabricated Data**: The application does not generate election dates or results. All election schedules are presented as "Expected" or "TBD" with explicit verification warnings.
2. **Mock Data Transparency**: The sidebar news feed and election timeline are clearly labelled as mock data, with instructions to verify at `eci.gov.in`.
3. **Source Hierarchy**: Official ECI resources take priority over all other content. If a conflict exists between content in the app and official ECI documentation, users are instructed to defer to the official source.

---

## 7. Deployment Strategy

- **Build**: Vite (React) compiled to static assets.
- **Container**: nginx serving the SPA with fallback routing.
- **Hosting**: Google Cloud Run (`asia-south1`), stateless, auto-scaling.
- **Port**: `8080` (Cloud Run compatible).

---

*Built with Google Antigravity for Prompt Wars Virtual Hackathon.*
