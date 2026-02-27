import { Database, Heart, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Smartphone,
      title: 'Digital Health',
      description:
        'Implementing scalable digital solutions, from telemedicine platforms to automated patient management systems.',
    },
    {
      icon: Heart,
      title: 'Harm Reduction',
      description:
        'Evidence-based strategies for public health safety, needle exchange programs, and overdose prevention protocols.',
    },
    {
      icon: Database,
      title: 'Health Informatics',
      description:
        'Harnessing data-driven decision making to optimize clinical outcomes and operational efficiency in healthcare units.',
    },
  ];

  return (
    <section className="px-6 md:px-20 lg:px-40 py-24" id="expertise">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 dark:text-white text-4xl font-black tracking-tight mb-4"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 dark:text-slate-100 opacity-70 text-lg max-w-2xl"
          >
            Specializing in the intersection of clinical excellence and digital
            transformation to solve modern health challenges.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-slate-100/10 hover:border-slate-900/30 dark:hover:border-slate-100/30 transition-all hover:shadow-xl group cursor-default"
            >
              <div className="size-14 rounded-xl bg-slate-900/5 dark:bg-slate-100/5 flex items-center justify-center text-slate-900 dark:text-slate-100 mb-6 group-hover:bg-slate-900 dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300">
                <skill.icon className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-slate-900 dark:text-slate-100 opacity-70 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
