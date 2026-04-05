'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { services } from '@/data/services';
import { team } from '@/data/team';

// Note: metadata export is in a separate server component.
// This file stays 'use client' for the interactive form.

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', barber: '', date: '', time: '', notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', phone: '', service: '', barber: '', date: '', time: '', notes: '' });
      }, 5000);
    }, 2000);
  };

  const timeSlots = [
    '10:00 AM','10:30 AM','11:00 AM','11:30 AM',
    '12:00 PM','12:30 PM','1:00 PM','1:30 PM',
    '2:00 PM','2:30 PM','3:00 PM','3:30 PM',
    '4:00 PM','4:30 PM','5:00 PM','5:30 PM',
    '6:00 PM','6:30 PM','7:00 PM','7:30 PM',
    '8:00 PM','8:30 PM','9:00 PM','9:30 PM',
  ];

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-light flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-xl border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Booking Confirmed!</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Thank you for choosing Issa Cuts. We'll confirm your appointment shortly via WhatsApp or phone.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left text-sm">
            <p className="text-gray-600 mb-1"><strong className="text-charcoal">Service:</strong> {services.find(s => s.id === formData.service)?.name}</p>
            <p className="text-gray-600 mb-1"><strong className="text-charcoal">Date:</strong> {formData.date}</p>
            <p className="text-gray-600"><strong className="text-charcoal">Time:</strong> {formData.time}</p>
          </div>
          <Button onClick={() => window.location.href = '/'} size="lg" className="w-full">
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light">
      {/* Page header */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="label-tag text-gold">Book Online</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            {/* h1 optimised for "how to book barber SS15" queries */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Book Your <span className="text-gold">Appointment</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Choose your service, barber, and preferred time. Walk-ins also welcome daily 10 AM – 1 AM.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Step 1 — Personal info */}
            <fieldset id="confirm">
              <legend className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <User size={18} className="text-gold" />
                  Your Details
                </h2>
              </legend>
              <div className="grid md:grid-cols-2 gap-5">
                <Input label="Full Name" type="text" placeholder="Ahmad Razif" value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                <Input label="Phone Number" type="tel" placeholder="+60 18-235 8639" value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                <Input label="Email Address" type="email" placeholder="you@example.com" value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })} required className="md:col-span-2" />
              </div>
            </fieldset>

            {/* Step 2 — Service */}
            <fieldset id="service" className="border-t border-gray-100 pt-8">
              <legend className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <MessageSquare size={18} className="text-gold" />
                  Select Service
                </h2>
              </legend>
              <div className="grid md:grid-cols-2 gap-3">
                {services.map(service => (
                  <label
                    key={service.id}
                    className={`relative cursor-pointer block p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.service === service.id
                        ? 'border-gold bg-gold/4 shadow-sm'
                        : 'border-gray-100 hover:border-gold/40'
                    }`}
                  >
                    <input type="radio" name="service" value={service.id}
                      checked={formData.service === service.id}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="sr-only" required />
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-sm text-charcoal">{service.name}</span>
                      <span className="text-gold font-bold text-sm">{service.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1.5">{service.description}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} />{service.duration}
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Step 3 — Barber */}
            <fieldset id="barber" className="border-t border-gray-100 pt-8">
              <legend className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <User size={18} className="text-gold" />
                  Choose Your Barber
                </h2>
              </legend>
              <div className="grid md:grid-cols-4 gap-3">
                <label className={`cursor-pointer block p-4 rounded-xl border-2 transition-all duration-200 ${
                  formData.barber === 'any' ? 'border-gold bg-gold/4' : 'border-gray-100 hover:border-gold/40'
                }`}>
                  <input type="radio" name="barber" value="any"
                    checked={formData.barber === 'any'}
                    onChange={e => setFormData({ ...formData, barber: e.target.value })}
                    className="sr-only" required />
                  <p className="font-semibold text-sm text-center text-charcoal">Any Available</p>
                  <p className="text-xs text-gray-400 text-center mt-1">First available</p>
                </label>
                {team.map(member => (
                  <label key={member.id} className={`cursor-pointer block p-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.barber === member.id ? 'border-gold bg-gold/4' : 'border-gray-100 hover:border-gold/40'
                  }`}>
                    <input type="radio" name="barber" value={member.id}
                      checked={formData.barber === member.id}
                      onChange={e => setFormData({ ...formData, barber: e.target.value })}
                      className="sr-only" />
                    <p className="font-semibold text-sm text-charcoal">{member.name}</p>
                    <p className="text-[10px] text-gold font-medium mt-0.5">{member.role}</p>
                    <p className="text-xs text-gray-400 mt-1">{member.specialty}</p>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Step 4 — Date & Time */}
            <fieldset id="datetime" className="border-t border-gray-100 pt-8">
              <legend className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <Calendar size={18} className="text-gold" />
                  Date &amp; Time
                </h2>
              </legend>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <Input label="Preferred Date" type="date" value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]} required />
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Preferred Time
                  </label>
                  <select value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm bg-white"
                    required>
                    <option value="">Select a time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <Textarea label="Additional Notes (Optional)"
                placeholder="Any specific requests, allergies, or preferences..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })} />
            </fieldset>

            {/* Submit */}
            <div className="pt-2">
              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <><Calendar size={16} />Confirm Booking</>
                )}
              </Button>
              <p className="text-xs text-gray-400 text-center mt-3">
                We'll contact you to confirm your appointment via WhatsApp or phone.
              </p>
            </div>
          </form>
        </motion.div>

        {/* Contact fallback */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Prefer to call?{' '}
          <a href="tel:+60182358639" className="text-gold font-semibold hover:text-gold-dark transition-colors">
            018-235 8639
          </a>
        </p>
      </div>
    </div>
  );
}
