import { createContext, useContext } from 'react';

const EXPERIENCE_OVERIVIEW = {
  range: [['2017-10-24', '2024-04-11']],
  email: 'khadem.avinoor@gmail.com'
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