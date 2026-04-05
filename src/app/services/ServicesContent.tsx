'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Star, Sparkles, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { services } from '@/data/services';

const iconMap: Record<string, any> = {
  scissors: Sparkles,
  razor: Sparkles,
  star: Star,
};

export default function ServicesContent() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium grooming services crafted with precision and care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isPopular = service.id === 'combo-package';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10 flex items-center gap-2">
                      <Star size={16} className="fill-white" />
                      MOST POPULAR
                    </div>
                  )}

                  <Card className={`h-full overflow-hidden ${isPopular ? 'ring-2 ring-gold shadow-gold' : ''}`}>
                    {/* Service Header */}
                    <div className="bg-gradient-to-br from-charcoal to-gray-800 p-8 text-white">
                      <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gold">{service.price}</span>
                        <span className="text-gray-400">/ session</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
                        <Clock className="text-gold" size={20} />
                        <span className="font-semibold">Duration:</span>
                        <span className="text-gray-600">{service.duration}</span>
                      </div>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h3 className="font-bold mb-3">What's Included:</h3>
                        <ul className="space-y-2">
                          {getServiceInclusions(service.id).map((inclusion, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                              <span>{inclusion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/booking" className="block">
                        <Button className="w-full gap-2" size="lg">
                          <Calendar size={20} />
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Services?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl mb-2">✂️</div>
                <h3 className="font-bold mb-2">Expert Barbers</h3>
                <p className="text-gray-600">Trained professionals with years of experience</p>
              </div>
              <div>
                <div className="text-4xl mb-2">⭐</div>
                <h3 className="font-bold mb-2">Premium Products</h3>
                <p className="text-gray-600">Only the finest grooming products</p>
              </div>
              <div>
                <div className="text-4xl mb-2">💯</div>
                <h3 className="font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We ensure you leave satisfied</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold to-gold-dark rounded-2xl p-8 text-charcoal">
              <h3 className="text-2xl font-bold mb-4">Special Combo Package Deal!</h3>
              <p className="text-lg mb-6">
                Get our Haircut + Beard Trim + Hot Towel combo and save RM 25!
              </p>
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  Book Combo Package
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function getServiceInclusions(serviceId: string): string[] {
  const inclusions: Record<string, string[]> = {
    'classic-cut': [
      'Consultation with barber',
      'Professional haircut',
      'Hair wash with premium shampoo',
      'Blow dry and styling',
      'Complimentary beverage'
    ],
    'fade-cut': [
      'Detailed consultation',
      'Precision fade haircut',
      'Sharp line-up',
      'Hair wash and conditioning',
      'Blow dry and styling',
      'Complimentary beverage'
    ],
    'beard-trim': [
      'Beard assessment',
      'Professional trimming and shaping',
      'Hot towel treatment',
      'Beard oil application',
      'Aftercare advice'
    ],
    'royal-shave': [
      'Pre-shave hot towel',
      'Premium shaving cream application',
      'Professional straight razor shave',
      'Post-shave moisturizer',
      'Face massage',
      'Complimentary beverage'
    ],
    'kids-cut': [
      'Patient and friendly service',
      'Age-appropriate haircut',
      'Hair wash (if needed)',
      'Styling',
      'Small gift for good behavior'
    ],
    'combo-package': [
      'Full haircut service',
      'Complete beard trim',
      'Hot towel treatment',
      'Hair wash and conditioning',
      'Blow dry and styling',
      'Beard oil application',
      'Premium beverage',
      'Best value - Save RM 25!'
    ]
  };

  return inclusions[serviceId] || [];
}
