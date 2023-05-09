'use client';

import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {(mounted && currentTheme === 'dark') ? (
        <MdLightMode
          className="text-2xl cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonFill
          className="text-2xl cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
