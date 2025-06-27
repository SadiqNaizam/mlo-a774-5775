import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryTextProps {
  className?: string;
}

const SecondaryText: React.FC<SecondaryTextProps> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      or,{' '}
      <a
        href="#"
        className="underline underline-offset-4 hover:text-card-foreground"
      >
        sign up
      </a>
    </p>
  );
};

export default SecondaryText;
