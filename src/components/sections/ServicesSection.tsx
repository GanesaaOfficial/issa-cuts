'use client';

import { Scissors, Clock, Star, Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { InView } from '@/components/ui/InView';
import { services } from '@/data/services';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  scissors: Scissors,
  razor: Sparkles,
  star: Star,
};

export function ServicesSection() {
  return (
    <Section id="services" background="gray">
      <SectionHeader
        label="Services"
        title="Crafted for Every Style"
        subtitle="Premium grooming services at honest prices — from RM 25"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Scissors;
          const isPopular = service.id === 'combo-package';

          return (
            <InView key={service.id} delay={i * 0.07} className="relative">
              {isPopular && (
                <div className="absolute -top-3 left-6 z-10 flex items-center gap-1.5 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-red">
                  <Star size={9} className="fill-white" />
                  Best Value
                </div>
              )}
              <Link href="/booking" className="block group h-full">
                <div
                  className={`h-full bg-white rounded-xl border transition-[border-color,box-shadow,transform] duration-300 overflow-hidden will-change-transform
                    ${isPopular
                      ? 'border-gold/30 shadow-[0_0_0_1px_rgba(220,20,60,0.12),0_8px_32px_rgba(220,20,60,0.08)]'
                      : 'border-gray-100 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]'
                    }
                    group-hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between p-6 pb-0">
                    <div className="w-12 h-12 bg-gold/8 rounded-xl flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-charcoal tracking-tight">{service.price}</div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                        <Clock size={10} />{service.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-5">
                    <h3 className="text-lg font-bold text-charcoal mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-[gap] duration-200">
                      Book Now
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-[width] duration-500 ease-out" />
                </div>
              </Link>
            </InView>
          );
        })}
      </div>

      <InView delay={0.1} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-gray-400 text-sm">All services include complimentary wash and styling</p>
        <span className="hidden sm:block w-px h-4 bg-gray-300" />
        <Link href="/services" className="flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors group">
          View Full Service Menu
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </InView>
    </Section>
  );
}
