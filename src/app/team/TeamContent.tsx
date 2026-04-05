'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Star, Scissors, Users, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { team } from '@/data/team';

export default function TeamContent() {
  return (
    <div className="min-h-screen bg-gray-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Users className="text-gold mx-auto mb-4" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-gold">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Skilled professionals dedicated to making you look and feel your best
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card hover className="overflow-hidden group h-full">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-charcoal via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                      transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(220, 20, 60, 0.1) 20px, rgba(220, 20, 60, 0.1) 40px)`
                      }}
                    />
                    
                    <motion.div
                      className="relative z-10 text-9xl font-bold text-gold/30 group-hover:text-gold/50 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {member.name.charAt(0)}
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Scissors className="text-gold/20" size={32} />
                    </motion.div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 bg-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                      {member.experience}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-gold font-semibold text-lg flex items-center gap-2">
                          <Award size={18} />
                          {member.role}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0"
                      >
                        <Star size={24} className="text-white fill-white" />
                      </motion.div>
                    </div>
                    
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm text-gray-500 font-medium mb-1">SPECIALTY</p>
                      <p className="text-gray-700 font-semibold">{member.specialty}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm font-medium">Professional Experience</span>
                        <span className="font-bold text-gold text-xl">{member.experience}</span>
                      </div>
                    </div>

                    <Link href="/booking" className="block mt-4">
                      <Button className="w-full" size="md">
                        Book with {member.name}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes our barbers exceptional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Continuous Learning',
                description: 'Our barbers regularly attend workshops and training sessions to stay ahead of the latest trends and techniques.',
              },
              {
                icon: Heart,
                title: 'Client-Focused',
                description: 'We take time to understand your preferences, lifestyle, and face shape to create the perfect look for you.',
              },
              {
                icon: Award,
                title: 'Proven Excellence',
                description: 'With thousands of satisfied clients and countless positive reviews, our team delivers consistent quality.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our <span className="text-gold">Growing Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented, passionate barbers who share our commitment to excellence. 
              If you love what you do and want to be part of something special, we'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">Competitive</div>
                <div className="text-sm">Salary & Commission</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">Flexible</div>
                <div className="text-sm">Working Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">Great</div>
                <div className="text-sm">Team Environment</div>
              </div>
            </div>

            <a href="mailto:careers@issacuts.com" className="inline-block">
              <Button size="lg" variant="primary" className="shadow-2xl">
                Apply Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the <span className="text-gold">Issa Cuts</span> Difference
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Book with one of our expert barbers and discover why we're Subang Jaya's top-rated barbershop
            </p>
            <Link href="/booking">
              <Button size="lg" className="shadow-2xl">
                Book Your Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
