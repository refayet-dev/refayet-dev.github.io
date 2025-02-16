'use client';

import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Globe, Search, TestTube, BarChart } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Digital Storefront Mastery',
    description: 'Craft high-performance Shopify themes with stunning designs, faster load times, and higher conversions.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building fast, responsive websites using modern technologies.'
  },
  {
    icon: BarChart,
    title: 'A/B Testing & Conversion Rate Optimization (CRO)',
    description: 'Use data-driven A/B tests to optimize websites, boosting engagement and transactions.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks great on all devices and screen sizes.'
  },
  {
    icon: Globe,
    title: 'Cross-Browser Testing',
    description: 'Rigorous testing across all major browsers for consistent experience.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improving your websites visibility in search engine results.'
  }
 
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5 dark:from-background dark:to-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card p-6 rounded-lg"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}