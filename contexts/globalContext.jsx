import { createContext, useContext } from 'react';

const PANEL_QUERY_VALUES = {
  all: 'all-experiences',
  projects: 'projects',
  timeline: 'experience-in-years',
};

const EXPERIENCE_OVERIVIEW = {
  range: [['2017-10-24', '2024-04-11']],
  email: 'khadem.avinoor@gmail.com',
  panel_query_values: PANEL_QUERY_VALUES,
  valid_paths: Object.values(PANEL_QUERY_VALUES),
  panels: [
    { text: 'All experiences', query_value: PANEL_QUERY_VALUES.all },
    { text: 'Projects', query_value: PANEL_QUERY_VALUES.projects },
    { text: 'Experience in years', query_value: PANEL_QUERY_VALUES.timeline },
  ]
}

// Create Context object.
const GlobalContext = createContext(EXPERIENCE_OVERIVIEW);

// Export Provider.
export function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider value={EXPERIENCE_OVERIVIEW}>
      {children}
    </GlobalContext.Provider>
  );
}

// Export useContext Hook.
export function useGlobalContext() {
  return useContext(GlobalContext);
}