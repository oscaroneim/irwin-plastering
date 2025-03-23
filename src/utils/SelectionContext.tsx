'use client';

import { createContext, useContext, useState } from 'react';
import React from 'react';

const SelectionContext = createContext<{
  selected: string;
  setSelected: (value: string) => void;
}>({
  selected: '',
  setSelected: () => {},
});

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState('');

  return (
    <SelectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
