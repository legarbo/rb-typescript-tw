'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const darkImage = (
    <Image
      priority
      src="../../images/icon-dark.svg"
      width={20}
      height={20}
      alt="dark icon"
    />
  );

  const lightImage = (
    <Image
      priority
      src="../../images/icon-light.svg"
      width={20}
      height={20}
      alt="light icon"
    />
  );

  return (
    <div>
      {theme === 'dark' && (
        <button onClick={() => setTheme('light')}>{lightImage}</button>
      )}
      {theme === 'light' && (
        <button onClick={() => setTheme('dark')}>{darkImage}</button>
      )}
    </div>
  );
};
