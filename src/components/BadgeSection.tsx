import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export function BadgeSection() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-12 bg-white dark:bg-[#242526] transition-colors duration-200 border-y border-slate-900/5 dark:border-slate-100/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative size-40 md:size-48 flex items-center justify-center">
            <img
              src="./pmp.png"
              alt="PMP Certified Badge"
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left max-w-md"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Certified Professional
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Recognized for excellence in Project Management and Public Health Administration.
            Committed to maintaining the highest standards of professional practice.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
              PMP® Certified
            </span>
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
              MBBS
            </span>
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
              MPA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
