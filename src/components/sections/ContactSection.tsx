'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { InView } from '@/components/ui/InView';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';

const contactItems = [
  { icon: MapPin, label: 'Location', value: contactInfo.address,   href: undefined },
  { icon: Phone,  label: 'Phone',    value: contactInfo.phone,     href: `tel:${contactInfo.phone}` },
  { icon: Mail,   label: 'Email',    value: contactInfo.email,     href: `mailto:${contactInfo.email}` },
  { icon: Clock,  label: 'Hours',    value: `Open Daily — ${contactInfo.hours.weekdays}`, href: undefined },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <Section id="contact" background="gray">
      <SectionHeader
        label="Get In Touch"
        title="We'd Love to Hear From You"
        subtitle="Questions or special requests? Drop us a message."
      />

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left: Info */}
        <InView variant="fade-left" className="space-y-6">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-5">
              <div className="w-11 h-11 flex-shrink-0 bg-gold rounded-xl flex items-center justify-center shadow-red">
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <p className="label-tag text-gray-400 mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-charcoal font-medium text-sm hover:text-gold transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-charcoal font-medium text-sm leading-relaxed">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 aspect-video bg-charcoal flex flex-col items-center justify-center relative">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(-45deg,rgba(255,255,255,0.5) 0,rgba(255,255,255,0.5) 1px,transparent 0,transparent 50%)`,
                backgroundSize: '10px 10px',
              }}
            />
            <MapPin size={48} className="text-gold mb-3 relative z-10" />
            <p className="text-white font-semibold text-sm relative z-10 mb-3 px-4 text-center">{contactInfo.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 text-xs text-gold border border-gold/50 px-4 py-2 rounded-full hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(220,20,60,0.3)] transition-all duration-200 active:scale-[0.97]"
            >
              Open in Google Maps
              <ArrowRight size={11} />
            </a>
          </div>
        </InView>

        {/* Right: Form */}
        <InView variant="fade-right" delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl border border-gray-100 p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Name" type="text" placeholder="Your name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <Input label="Phone" type="tel" placeholder="+60 18-235 8639" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            </div>
            <Input label="Email" type="email" placeholder="your@email.com" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-[border-color,box-shadow] bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="classic">Classic Haircut — RM 35</option>
                <option value="fade">Fade Haircut — RM 40</option>
                <option value="beard">Beard Trim — RM 25</option>
                <option value="shave">Royal Shave — RM 45</option>
                <option value="kids">Kids Haircut — RM 25</option>
                <option value="combo">Combo Package — RM 65</option>
              </select>
            </div>
            <Textarea label="Message" placeholder="Any specific requests..." value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
            <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <><Send size={15} />Send Message</>
              )}
            </Button>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center text-sm font-medium"
              >
                Message sent! We'll get back to you shortly.
              </motion.p>
            )}
          </form>
        </InView>
      </div>
    </Section>
  );
}
