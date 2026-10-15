import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { dentalClinicData } from '../data/dentalClinic';
import { skinClinicData } from '../data/skinClinic';

const ClinicContext = createContext(null);

export const ClinicProvider = ({ children }) => {
  const location = useLocation();

  const isSkin = location.pathname.startsWith('/skin-clinic');
  const isDental = location.pathname.startsWith('/dental-clinic');

  const clinicType = isSkin ? 'skin' : isDental ? 'dental' : 'hub';

  const clinicData = useMemo(() => {
    if (clinicType === 'skin') return skinClinicData;
    if (clinicType === 'dental') return dentalClinicData;
    return null;
  }, [clinicType]);

  const value = {
    clinicType,
    isDental: clinicType === 'dental',
    isSkin: clinicType === 'skin',
    isHub: clinicType === 'hub',
    clinicData,
    basePath: isSkin ? '/skin-clinic' : isDental ? '/dental-clinic' : '/',
  };

  return <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>;
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
