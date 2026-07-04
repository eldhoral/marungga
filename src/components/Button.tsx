import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

export default function Button({ variant = 'primary', children, as: Component = 'button', className = '', ...props }: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  return (
    <Component className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
