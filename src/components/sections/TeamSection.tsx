'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { InView } from '@/components/ui/InView';
import { team } from '@/data/team';
import { Scissors, ArrowUpRight } from 'lucide-react';

export function TeamSection() {
  return (
    <Section id="team" background="gray">
      <SectionHeader
        label="The Team"
        title="Master Craftsmen"
        subtitle="Expert barbers dedicated to precision and your personal style"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <InView key={member.id} delay={i * 0.1}>
            <div className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gold/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 will-change-transform">

              {/* Portrait placeholder */}
              <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(-45deg,rgba(255,255,255,0.5) 0,rgba(255,255,255,0.5) 1px,transparent 0,transparent 50%)`,
                    backgroundSize: '12px 12px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center select-none">
                  <span className="text-[9rem] font-bold text-white/[0.07] leading-none tracking-tighter">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-5 right-5">
                  <Scissors size={28} className="text-gold/25" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gold text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
                  {member.experience}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-gray-300 text-sm leading-relaxed translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-0.5">{member.name}</h3>
                    <p className="text-gold text-sm font-semibold">{member.role}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-[background-color,border-color] duration-300">
                    <ArrowUpRight size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="label-tag text-gray-400 mr-2">Specialty</span>
                  <span className="text-sm text-charcoal font-medium">{member.specialty}</span>
                </div>
              </div>
            </div>
          </InView>
        ))}
      </div>

      {/* Join the team */}
      <InView delay={0.2} className="mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl border border-gray-100 p-8">
          <div>
            <h3 className="text-xl font-bold text-charcoal mb-1">Join Our Team</h3>
            <p className="text-gray-500 text-sm">We're looking for talented barbers to grow with us.</p>
          </div>
          <a
            href="mailto:info@issacuts.com"
            className="group flex items-center gap-3 flex-shrink-0 px-6 py-3 border border-charcoal text-charcoal text-sm font-semibold rounded hover:bg-charcoal hover:text-white transition-[background-color,color] duration-300"
          >
            Apply Now
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </InView>
    </Section>
  );
}
