import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl overflow-hidden border border-gray-100/80',
        hover && 'card-premium cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
