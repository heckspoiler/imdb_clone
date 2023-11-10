'use client';

import React from 'react';
import { BsSun as LightMode } from 'react-icons/bs';
import { BsMoon as DarkMode } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {currentTheme === 'dark' ? (
        <LightMode onClick={() => setTheme('light')} />
      ) : (
        <DarkMode onClick={() => setTheme('dark')} />
      )}
    </>
  );
}
