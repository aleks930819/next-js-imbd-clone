'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-gray-700 transition-all duration-300 ease-in-out select-none
        min-h-screen
      "
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
