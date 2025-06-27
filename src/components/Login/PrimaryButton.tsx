import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button className={cn('w-full h-11 text-base font-bold', className)} {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
