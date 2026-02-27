import { BriefcaseMedical, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mm' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center text-white dark:text-slate-900 transition-colors duration-200">
          <BriefcaseMedical className="size-5" />
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight transition-colors duration-200">
          {t('hero.name')}
        </h2>
      </div>
      <div className="flex items-center gap-2 md:gap-8">
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-slate-900 dark:text-slate-100 hover:opacity-70 text-sm font-medium transition-all duration-200"
            href="#"
          >
            {t('nav.home')}
          </a>
          <a
            className="text-slate-900 dark:text-slate-100 hover:opacity-70 text-sm font-medium transition-all duration-200"
            href="#journey"
          >
            {t('nav.experience')}
          </a>
          <a
            className="text-slate-900 dark:text-slate-100 hover:opacity-70 text-sm font-medium transition-all duration-200"
            href="#expertise"
          >
            {t('nav.skills')}
          </a>
          <a
            className="text-slate-900 dark:text-slate-100 hover:opacity-70 text-sm font-medium transition-all duration-200"
            href="https://www.credly.com/users/awlsway"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('nav.contact')}
          </a>
        </nav>
        <div className="flex items-center gap-3 md:border-l border-slate-900/10 dark:border-slate-100/10 md:pl-6 transition-colors duration-200">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center rounded-lg h-9 px-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer hover:opacity-90"
          >
            {i18n.language === 'en' ? 'EN | MM' : 'MM | EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg h-10 w-10 md:h-9 md:w-9 border border-slate-900/10 dark:border-slate-100/10 text-slate-900 dark:text-slate-100 hover:bg-slate-900/5 dark:hover:bg-slate-100/5 transition-all duration-200 cursor-pointer touch-manipulation"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
