'use client';

import { Award, Clock, Shield, ThumbsUp, Users, Sparkles } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { InView } from '@/components/ui/InView';

const features = [
  { icon: Award,    num: '01', title: 'Expert Barbers',     description: 'Our team carries decades of combined experience across classic and modern styling techniques.' },
  { icon: Clock,    num: '02', title: 'No Long Waits',      description: 'Book your appointment online and skip the queue. We respect your time.' },
  { icon: Shield,   num: '03', title: 'Premium Products',   description: 'We use only the finest grooming products for your hair and skin.' },
  { icon: ThumbsUp, num: '04', title: '100% Satisfaction',  description: "Not happy with your cut? We'll make it right — that's our guarantee." },
  { icon: Users,    num: '05', title: 'Family Friendly',    description: 'From kids to seniors, everyone is welcome. Special rates for children.' },
  { icon: Sparkles, num: '06', title: 'Modern Atmosphere',  description: 'A clean, contemporary shop with a relaxed vibe and great energy.' },
];

const stats = [
  { value: '10+',    label: 'Years in Business' },
  { value: '5,000+', label: 'Happy Clients' },
  { value: '5.0',    label: 'Google Rating' },
  { value: '3',      label: 'Expert Barbers' },
];

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" background="white">
      <SectionHeader
        label="Why Us"
        title="The Issa Cuts Difference"
        subtitle="Precision, craft, and consistency — every single visit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <InView key={feature.num} delay={i * 0.06}>
              <div className="group relative p-7 rounded-xl border border-gray-100 bg-white hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 overflow-hidden will-change-transform h-full">
                <span className="absolute top-4 right-5 text-6xl font-bold text-gray-50 select-none transition-colors duration-300 group-hover:text-red-50 pointer-events-none">
                  {feature.num}
                </span>
                <div className="w-11 h-11 bg-gold/8 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-charcoal">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-[width] duration-500 ease-out" />
              </div>
            </InView>
          );
        })}
      </div>

      {/* Stats bar */}
      <InView delay={0.1} className="mt-14">
        <div className="rounded-2xl bg-charcoal overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center py-10 px-6 text-center ${
                  i < stats.length - 1 ? 'border-r border-white/10' : ''
                } ${i >= 2 ? 'border-t border-white/10 md:border-t-0' : ''}`}
              >
                <span className="text-4xl md:text-5xl font-bold text-gold tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="label-tag text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </InView>
    </Section>
  );
}
