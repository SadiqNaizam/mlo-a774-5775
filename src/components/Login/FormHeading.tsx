import React from 'react';
import { cn } from '@/lib/utils';

interface FormHeadingProps {
  className?: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({ className }) => {
  return (
    <h1 className={cn('text-3xl font-bold text-card-foreground', className)}>
      Log in
    </h1>
  );
};

export default FormHeading;
