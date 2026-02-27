import { motion } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-20 lg:px-40 py-16 md:py-32">
      <div className="@container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 aspect-square max-w-md mx-auto lg:mx-0 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl shadow-slate-900/5 dark:shadow-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10"></div>
            <img
              alt="Aung Myint Thu Professional Portrait"
              className="w-full h-full object-cover transition-all duration-700"
              src="/profile.webp"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8 w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-900/20 dark:border-slate-100/20 text-slate-900 dark:text-slate-100 text-xs font-bold uppercase tracking-widest w-fit">
                <span className="size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 animate-pulse"></span>
                {t('hero.available')}
              </div>
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                {t('hero.name')} <br />
                <span className="opacity-70">{t('hero.roles')}</span>
              </h1>
              <p className="text-slate-900 dark:text-slate-100 text-lg md:text-xl font-normal leading-relaxed max-w-xl opacity-80">
                <Trans i18nKey="hero.description">
                  Bridging medical expertise with technical innovation. Leading the
                  future of{' '}
                  <span className="font-bold underline decoration-slate-900/30 dark:decoration-slate-100/30 decoration-2 underline-offset-4">
                    Harm Reduction
                  </span>{' '}
                  and{' '}
                  <span className="font-bold underline decoration-slate-900/30 dark:decoration-slate-100/30 decoration-2 underline-offset-4">
                    Digital Health
                  </span>{' '}
                  systems.
                </Trans>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
