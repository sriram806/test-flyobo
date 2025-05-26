"use client";

import { useState } from 'react';
import { faqData } from '@/lib/data';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';

export function FAQSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setExpandedItems(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our travel packages and booking process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={expandedItems} className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <AccordionTrigger 
                  onClick={() => toggleItem(`item-${faq.id}`)}
                  className="px-6 py-4 hover:no-underline"
                >
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Still have questions? Feel free to{' '}
              <a href="/contact" className="text-primary font-medium hover:underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}