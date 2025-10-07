import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWebSetting } from '../utils/Api_path';

const LogoContext = createContext();

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const webSettings = await fetchWebSetting();
        if (webSettings?.logo) {
          setLogo(webSettings.logo);
        }
      } catch (error) {
        console.error('Failed to load logo:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLogo();
  }, []);

  return (
    <LogoContext.Provider value={{ logo, loading }}>
      {children}
    </LogoContext.Provider>
  );
};