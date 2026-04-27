import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    guideTitle: 'Your Guide to Voting',
    welcome: 'Election Assistant',
    getStarted: 'Get Started',
    roadmap: 'Personalized Roadmap',
    home: 'Home',
    assistant: 'Assistant',
    eligibility: 'Eligibility',
    workflows: 'Workflows',
    upcoming: 'Upcoming',
    forms: 'Forms',
    resources: 'Resources',
    toggleLang: 'Switch to Hindi',
    roadmapTitle: 'Your Personal Voter Roadmap',
    firstTimeQ: 'Are you a first-time voter?',
    stateQ: 'Which state are you in?',
    yes: 'Yes',
    no: 'No',
    generate: 'Generate My Roadmap',
    wbPhaseMsg: 'Note: West Bengal Phase II polls are on April 29th.',
    form6Msg: 'As a first-time voter, you need to fill Form 6.',
    generalVoterMsg: 'Ensure your name is on the electoral roll.',
    readyToVote: 'Ready to Vote!'
  },
  hi: {
    guideTitle: 'मतदान के लिए आपकी मार्गदर्शिका',
    welcome: 'चुनाव सहायक',
    getStarted: 'शुरू करें',
    roadmap: 'व्यक्तिगत कार्ययोजना',
    home: 'मुख्य पृष्ठ',
    assistant: 'सहायक',
    eligibility: 'पात्रता',
    workflows: 'कार्यप्रवाह',
    upcoming: 'आगामी',
    forms: 'फॉर्म',
    resources: 'संसाधन',
    toggleLang: 'English में बदलें',
    roadmapTitle: 'आपकी व्यक्तिगत मतदाता कार्ययोजना',
    firstTimeQ: 'क्या आप पहली बार मतदाता बने हैं?',
    stateQ: 'आप किस राज्य में हैं?',
    yes: 'हाँ',
    no: 'नहीं',
    generate: 'मेरी कार्ययोजना बनाएं',
    wbPhaseMsg: 'नोट: पश्चिम बंगाल चरण II का मतदान 29 अप्रैल को है।',
    form6Msg: 'पहली बार मतदाता होने के नाते, आपको फॉर्म 6 भरना होगा।',
    generalVoterMsg: 'सुनिश्चित करें कि आपका नाम मतदाता सूची में है।',
    readyToVote: 'वोट देने के लिए तैयार!'
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
