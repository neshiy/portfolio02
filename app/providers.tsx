'use client';

import { ThemeProvider } from './context/ThemeContext';
import VideoBackground from './components/VideoBackground';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <VideoBackground />
      {children}
    </ThemeProvider>
  );
}
