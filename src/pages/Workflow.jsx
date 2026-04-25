import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, CheckCircle, ArrowRight, MousePointerClick } from 'lucide-react';

const workflows = {
  registration: {
    label: 'New Registration',
    steps: [
      { title: "Verify Eligibility", desc: "Ensure you meet the basic criteria to vote.", action: "Confirm you are an Indian citizen and 18+ years old.", mistake: "Assuming registration is automatic when you turn 18." },
      { title: "Gather Documents", desc: "Collect your proofs before starting.", action: "Keep scanned copies of your age proof, address proof, and a passport photo ready.", mistake: "Uploading blurry or cropped document photos." },
      { title: "Submit Form 6", desc: "Apply via the official Voter Service Portal.", action: "Carefully fill out Form 6 online and attach your documents.", mistake: "Making spelling mistakes in your name or parents' names." },
      { title: "BLO Verification", desc: "A Booth Level Officer will verify your details.", action: "Keep your original documents handy for physical verification if visited.", mistake: "Providing an unreachable phone number." }
    ],
    nextAction: { text: "Find Form 6 details", link: "/forms" }
  },
  correction: {
    label: 'Correction Request',
    steps: [
      { title: "Identify the Error", desc: "Check your current Voter ID for mistakes.", action: "Note down exactly what needs fixing (Name, DOB, Photo, etc).", mistake: "Submitting a new registration instead of a correction." },
      { title: "Get Supporting Proof", desc: "You need a document proving the correct detail.", action: "Find a valid document (like PAN or Aadhaar) that shows the correct information.", mistake: "Not attaching proof for the specific field you are correcting." },
      { title: "Submit Form 8", desc: "File for a correction online.", action: "Select 'Correction of Entries' in Form 8 and enter your EPIC number.", mistake: "Selecting the wrong radio button in the Form 8 menu." }
    ],
    nextAction: { text: "View Required Documents", link: "/forms" }
  },
  shift: {
    label: 'Shift Constituency',
    steps: [
      { title: "Determine Shift Type", desc: "Are you moving locally or far away?", action: "Check if your new address is in the same Assembly Constituency or a new one.", mistake: "Not knowing your new constituency name." },
      { title: "Select the Form", desc: "Choose based on your shift type.", action: "Use Form 8 for shifting within the same constituency. Use Form 6 for a new constituency.", mistake: "Filing Form 6 for a simple local address change." },
      { title: "Attach New Address Proof", desc: "Prove you live at the new location.", action: "Upload a recent utility bill, rent agreement, or updated Aadhaar.", mistake: "Using an old address proof that doesn't match the form." }
    ],
    nextAction: { text: "Use the Form Wizard", link: "/forms" }
  },
  polling: {
    label: 'Polling Day',
    steps: [
      { title: "Verify Your Name", desc: "Check the Electoral Roll.", action: "Search your name online to find your exact Part Number and Serial Number.", mistake: "Assuming having a Voter ID card guarantees you are on the current list." },
      { title: "Find Your Booth", desc: "Locate your polling station.", action: "Note down your assigned polling booth address before leaving home.", mistake: "Going to an old polling booth without checking." },
      { title: "Carry Valid ID", desc: "Bring an approved identity document.", action: "Carry your EPIC (Voter ID). If you don't have it, bring Aadhaar, PAN, or Passport.", mistake: "Bringing a photocopy of your ID instead of the original." },
      { title: "Cast Your Vote", desc: "Use the EVM machine.", action: "Press the blue button next to your chosen candidate and verify the VVPAT slip.", mistake: "Leaving before the VVPAT slip drops and the beep sounds." }
    ],
    nextAction: { text: "Ask the Assistant", link: "/assistant" }
  }
};

/**
 * Displays a set of guided workflows for common electoral processes (Registration, Correction, etc.).
 * Allows users to navigate through the required steps and common mistakes for each process.
 * 
 * @component
 * @returns {JSX.Element} The rendered Workflow component.
 */
const Workflow = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('registration');
  const navigate = useNavigate();

  const currentData = workflows[activeWorkflow];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Guided Workflows</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
        Step-by-step guides for crucial electoral processes.
      </p>

      {/* Workflow Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
        {Object.entries(workflows).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveWorkflow(key)}
            aria-label={`Switch to ${data.label} workflow`}
            aria-pressed={activeWorkflow === key}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              border: `1px solid ${activeWorkflow === key ? 'var(--primary)' : 'var(--border-color)'}`,
              cursor: 'pointer',
              fontWeight: activeWorkflow === key ? 'bold' : 'normal',
              backgroundColor: activeWorkflow === key ? 'var(--primary)' : 'var(--card-bg)',
              color: activeWorkflow === key ? '#fff' : 'var(--text-color)',
              transition: 'all 0.2s',
              fontSize: '0.95rem'
            }}
          >
            {data.label}
          </button>
        ))}
      </div>

      {/* Active Workflow Steps */}
      <div className="animate-fade-in" style={{ position: 'relative', marginBottom: '3rem' }}>
        <div style={{ position: 'absolute', left: '1.25rem', top: '1rem', bottom: '1rem', width: '2px', backgroundColor: 'var(--primary)', opacity: 0.3, zIndex: -1 }}></div>
        
        {currentData.steps.map((step, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'stretch' }}>
            <div style={{ 
              width: '2.5rem', 
              height: '2.5rem', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary)', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0,
              boxShadow: '0 0 0 4px var(--bg-color)',
              marginTop: '0.5rem'
            }}>
              {idx + 1}
            </div>
            <Card style={{ flex: 1, padding: '1.5rem' }} hoverable>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--primary)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-color)', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.5' }}>{step.desc}</p>
              
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MousePointerClick size={18} color="var(--success)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--success)', marginBottom: '0.25rem' }}>Action Required</strong>
                  <span style={{ fontSize: '0.95rem', color: 'var(--secondary-text)' }}>{step.action}</span>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', borderLeft: '3px solid var(--danger)' }}>
                <AlertTriangle size={18} color="var(--danger)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--danger)', marginBottom: '0.25rem' }}>Common Mistake</strong>
                  <span style={{ fontSize: '0.95rem', color: 'var(--secondary-text)' }}>{step.mistake}</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Next Best Action Panel */}
      <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Ready to proceed?</h3>
        <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem' }}>Take the next step towards completing this process.</p>
        <Button onClick={() => navigate(currentData.nextAction.link)} style={{ padding: '0.75rem 2rem' }}>
          {currentData.nextAction.text} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
        </Button>
      </div>

    </div>
  );
};

export default Workflow;
