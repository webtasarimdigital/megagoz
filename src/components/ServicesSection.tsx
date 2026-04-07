'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Zap, Activity, Droplets, Baby, Crosshair } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  cataract: <Eye className="w-8 h-8 text-white" />,
  laser: <Zap className="w-8 h-8 text-white" />,
  retina: <Activity className="w-8 h-8 text-white" />,
  glaucoma: <Droplets className="w-8 h-8 text-white" />,
  pediatric: <Baby className="w-8 h-8 text-white" />,
  cornea: <Crosshair className="w-8 h-8 text-white" />
};

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    { id: 'cataract', icon: serviceIcons.cataract },
    { id: 'laser', icon: serviceIcons.laser },
    { id: 'retina', icon: serviceIcons.retina },
    { id: 'glaucoma', icon: serviceIcons.glaucoma },
    { id: 'pediatric', icon: serviceIcons.pediatric },
    { id: 'cornea', icon: serviceIcons.cornea },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="services">
      {/* Background purely aesthetic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-cyan)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary-blue)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100/50 text-[var(--color-primary-blue)] font-medium text-sm"
          >
            {t('badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-cyan)] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-primary-blue)] transition-colors">
                {t(`items.${service.id}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`items.${service.id}.description`)}
              </p>
              <div className="mt-6 flex items-center text-[var(--color-primary-blue)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mr-2">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
