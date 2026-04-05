import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const base =
    'font-semibold rounded tracking-wide inline-flex items-center justify-center transition-all duration-250 active:scale-[0.97]';

  const variants = {
    primary:
      'bg-gold text-white hover:bg-gold-dark hover:shadow-red focus-visible:ring-2 focus-visible:ring-gold',
    secondary:
      'bg-charcoal text-white hover:bg-charcoal-soft hover:shadow-lg',
    outline:
      'border border-gold text-gold hover:bg-gold hover:text-white',
    ghost:
      'text-charcoal hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-sm',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
