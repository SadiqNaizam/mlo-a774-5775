import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className={cn('h-11 text-base', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
InputField.displayName = 'InputField';

export default InputField;
