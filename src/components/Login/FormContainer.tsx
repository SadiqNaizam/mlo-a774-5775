import React from 'react';
import { cn } from '@/lib/utils';

interface FormContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'bg-card text-card-foreground rounded-lg shadow-lg w-96 p-6 space-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormContainer;
