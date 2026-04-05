import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function Section({ children, className, id, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-light',
    dark: 'bg-charcoal text-white noise-overlay',
  };

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  label,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {/* Optional small label above */}
      {label && (
        <div className={cn('flex items-center gap-3 mb-5', centered && 'justify-center')}>
          <div className="h-px w-8 bg-gold" />
          <span className="label-tag text-gold">{label}</span>
          <div className="h-px w-8 bg-gold" />
        </div>
      )}

      {/* Heading */}
      <h2
        className={cn(
          'text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08]',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>

      {/* Accent bar — only shown when no label */}
      {!label && (
        <div className={cn('flex gap-1.5 mt-4', centered ? 'justify-center' : 'justify-start')}>
          <div className="h-[3px] w-10 bg-gold rounded-full" />
          <div className="h-[3px] w-3 bg-gold/35 rounded-full" />
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg leading-relaxed max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-gray-400' : 'text-gray-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
