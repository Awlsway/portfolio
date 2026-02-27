import { BriefcaseMedical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 md:px-20 lg:px-40 py-12 border-t border-slate-900/10 dark:border-slate-100/10 bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 bg-slate-900 dark:bg-slate-100 rounded flex items-center justify-center text-white dark:text-slate-900 transition-colors duration-200">
            <BriefcaseMedical className="size-3.5" />
          </div>
          <span className="text-slate-900 dark:text-slate-100 font-bold transition-colors duration-200">
            Aung Myint Thu
          </span>
        </div>
        <div className="flex text-slate-900 dark:text-slate-100 opacity-70 italic text-sm text-center md:text-left font-medium max-w-sm">
          "{t('footer.quote', 'live is not what you said but what you can create')}"
        </div>
        <p className="text-slate-900 dark:text-slate-100 opacity-50 text-sm transition-colors duration-200">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
