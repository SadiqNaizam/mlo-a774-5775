import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A simple layout component that centers its children both vertically and
 * horizontally within the full viewport. It serves as the main application
 * container for pages that require centered content, like the login page.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
