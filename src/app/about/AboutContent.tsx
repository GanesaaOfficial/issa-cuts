'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, Clock, Heart, Target, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal via-gray-800 to-charcoal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(220, 20, 60, 0.1) 35px, rgba(220, 20, 60, 0.1) 70px)`
          }} className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-gold">Issa Cuts</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where Traditional Barbering Meets Modern Style in the Heart of Subang Jaya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Established in <strong>2014</strong>, Issa Cuts began with a simple vision: to provide 
                  premium grooming services that honor traditional barbering techniques while embracing 
                  modern styles and trends.
                </p>
                <p>
                  Located in the vibrant community of <strong>SS15, Subang Jaya</strong>, we've grown 
                  from a small neighborhood barbershop to one of <strong>Selangor's most trusted names</strong> in 
                  men's grooming. Our success is built on three pillars: exceptional skill, genuine care, 
                  and unwavering commitment to our clients.
                </p>
                <p>
                  Over the years, we've had the privilege of serving <strong>over 5,000 satisfied clients</strong>, 
                  each with their unique style and preferences. From classic gentleman cuts to modern fades, 
                  from traditional hot towel shaves to contemporary beard sculpting, we've perfected the 
                  art of making every client look and feel their absolute best.
                </p>
                <p>
                  Today, Issa Cuts stands as a testament to what passion, dedication, and exceptional 
                  craftsmanship can achieve. We're not just a barbershop – we're a community hub where 
                  style meets tradition, and where every visit is an experience worth remembering.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-charcoal rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-gold/20" />
                <div className="text-center relative z-10 p-8">
                  <div className="text-8xl font-bold text-gold mb-4">10+</div>
                  <div className="text-2xl text-white font-semibold">Years of Excellence</div>
                  <div className="text-gray-300 mt-4">Serving Subang Jaya Since 2014</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every cut, every shave, every service we provide.',
              },
              {
                icon: Heart,
                title: 'Care',
                description: 'Your satisfaction and comfort are at the heart of everything we do.',
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'Attention to detail and meticulous craftsmanship in every service.',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Constantly evolving with the latest trends and techniques in grooming.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gold">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years in Business', icon: Clock },
              { number: '5,000+', label: 'Happy Clients', icon: Users },
              { number: '5.0/5', label: 'Google Rating', icon: Star },
              { number: '597', label: 'Google Reviews', icon: Sparkles },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <stat.icon className="text-gold mx-auto mb-4" size={40} />
                <div className="text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="text-gold">Issa Cuts</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Barbers',
                    description: 'Our team brings decades of combined experience and stays updated with the latest trends and techniques.',
                  },
                  {
                    title: 'Premium Products',
                    description: 'We use only the finest grooming products to ensure your hair and skin receive the best care.',
                  },
                  {
                    title: 'Convenient Location',
                    description: 'Located in the heart of SS15, Subang Jaya, with easy access and ample parking.',
                  },
                  {
                    title: 'Flexible Hours',
                    description: 'Open daily from 10 AM to 1 AM, including weekends and public holidays.',
                  },
                  {
                    title: 'Affordable Luxury',
                    description: 'Premium services at competitive prices, with packages that offer great value.',
                  },
                  {
                    title: 'Customer First',
                    description: '100% satisfaction guarantee - we\'re not happy until you\'re thrilled with your look.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1">
                      <Star className="text-white" size={16} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="p-6 bg-gradient-to-br from-gold to-gold-dark text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm font-semibold">Satisfaction Guaranteed</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-charcoal to-gray-800 text-white">
                <div className="text-3xl font-bold mb-2">7 Days</div>
                <div className="text-sm font-semibold">Open Weekly</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-gray-800 to-charcoal text-white">
                <div className="text-3xl font-bold mb-2">12 Hrs</div>
                <div className="text-sm font-semibold">Daily Service</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-gold-dark to-gold text-white">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm font-semibold">Expert Barbers</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the <span className="text-gold">Difference?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of satisfied clients who trust Issa Cuts for their grooming needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="shadow-2xl">
                  Book Your Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="shadow-xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
