import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.jobs.po.title'),
      subtitle: t('experience.jobs.po.company') + ' • ' + t('experience.jobs.po.date'),
      description: t('experience.jobs.po.description'),
    },
    {
      title: t('experience.jobs.pmp.title'),
      subtitle: t('experience.jobs.pmp.company') + ' • ' + t('experience.jobs.pmp.date'),
      description: t('experience.jobs.pmp.description'),
      badge: t('experience.jobs.pmp.badge', 'Certified'),
    },
    {
      title: t('experience.jobs.mpa.title'),
      subtitle: t('experience.jobs.mpa.company') + ' • ' + t('experience.jobs.mpa.date'),
      description: t('experience.jobs.mpa.description'),
    },
    {
      title: t('experience.jobs.gp.title'),
      subtitle: t('experience.jobs.gp.company') + ' • ' + t('experience.jobs.gp.date'),
      description: t('experience.jobs.gp.description'),
    }
  ];

  return (
    <section
      className="px-6 md:px-20 lg:px-40 py-24 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-200"
      id="journey"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-900 dark:text-white text-3xl font-bold mb-16 flex items-center gap-3"
        >
          <TrendingUp className="size-8 text-slate-900 dark:text-slate-100" />
          {t('experience.title')}
        </motion.h2>
        <div className="relative space-y-0">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-900/10 dark:bg-slate-100/10"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative pl-16 group ${index !== experiences.length - 1 ? 'pb-16' : ''
                }`}
            >
              <div className="absolute left-4 top-2 size-4 rounded-full bg-slate-400 dark:bg-slate-600 border-4 border-slate-50 dark:border-[#101922] z-10 transition-colors group-hover:bg-slate-900 dark:group-hover:bg-slate-100"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.title}
                </h3>
                {exp.badge && (
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 border border-slate-900/20 dark:border-slate-100/20 px-3 py-1 rounded-full uppercase tracking-tighter w-fit">
                    {exp.badge}
                  </span>
                )}
              </div>
              <p className="text-slate-900 dark:text-slate-100 font-semibold mb-2 opacity-70">
                {exp.subtitle}
              </p>
              <p className="text-slate-900 dark:text-slate-100 opacity-80 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
