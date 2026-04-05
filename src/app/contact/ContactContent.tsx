'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { contactInfo } from '@/data/contact';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-light">
      {/* Hero */}
      <section className="bg-gradient-to-r from-charcoal to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <MessageCircle className="text-gold mx-auto mb-4" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? We're here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href={`tel:${contactInfo.phone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center bg-gradient-to-br from-gold to-gold-dark text-white shadow-xl cursor-pointer">
                <Phone className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-sm">{contactInfo.phone}</p>
              </Card>
            </motion.a>

            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl cursor-pointer">
                <FaWhatsapp className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p className="text-sm">Chat with us instantly</p>
              </Card>
            </motion.a>

            <motion.a
              href={`mailto:${contactInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center bg-gradient-to-br from-charcoal to-gray-800 text-white shadow-xl cursor-pointer">
                <Mail className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-sm">{contactInfo.email}</p>
              </Card>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-8">Visit Our Shop</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">{contactInfo.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-dark font-medium text-sm mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-gold transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-gold transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <div className="text-gray-600">
                      <p className="mb-1"><strong className="text-foreground">Weekdays:</strong> {contactInfo.hours.weekdays}</p>
                      <p className="mb-1"><strong className="text-foreground">Weekends:</strong> {contactInfo.hours.weekends}</p>
                      <p className="text-green-600 font-semibold mt-2">Open Daily - Walk-ins Welcome!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10">
                    <div style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(220, 20, 60, 0.1) 20px, rgba(220, 20, 60, 0.1) 40px),
                                       repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(220, 20, 60, 0.1) 20px, rgba(220, 20, 60, 0.1) 40px)`
                    }} className="w-full h-full"></div>
                  </div>
                  <MapPin size={64} className="text-gold mb-3 relative z-10" />
                  <span className="text-white font-semibold text-lg relative z-10">SS15, Subang Jaya</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-3 bg-gold text-white rounded-lg font-medium hover:bg-gold-dark transition-colors relative z-10 shadow-xl"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Your Name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />

                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+60 18-235 8639"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />

                    <Input
                      label="Subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />

                    <Textarea
                      label="Your Message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need an appointment?',
                a: 'While appointments are recommended to guarantee your preferred time slot, we welcome walk-ins! Book online for the best experience.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, all major credit/debit cards, and popular e-wallets including Touch \'n Go, GrabPay, and Boost.'
              },
              {
                q: 'How long does a typical haircut take?',
                a: 'A standard haircut takes about 45 minutes, while more complex styles like fades may take up to an hour. Our combo packages typically require 90 minutes.'
              },
              {
                q: 'Do you offer student or senior discounts?',
                a: 'Yes! We offer special rates for students (with valid ID) and seniors. Contact us for current discount details.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gold">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
