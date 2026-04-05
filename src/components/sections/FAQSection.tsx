'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" background="white">
      <SectionHeader
        label="FAQ"
        title="Common Questions"
        subtitle="Answers to what people ask most about Issa Cuts"
      />

      {/* Semantic: dl wraps the FAQ list for screen readers & crawlers */}
      <dl className="max-w-3xl mx-auto divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i} className="py-5">
            <dt>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left group"
                aria-expanded={open === i}
              >
                {/* Question — phrased to match voice / People Also Ask */}
                <span className="text-base font-semibold text-charcoal group-hover:text-gold transition-colors duration-200 leading-snug">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-200 mt-0.5">
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>
            </dt>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.dd
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {/* Answer — 40-60 words, direct, citable by AI */}
                  <p className="pt-4 text-gray-500 text-sm leading-relaxed pr-10 speakable">
                    {faq.answer}
                  </p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        ))}
      </dl>
    </Section>
  );
}
