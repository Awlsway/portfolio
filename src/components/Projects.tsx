import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Database, Truck, Network } from 'lucide-react';

export function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            id: 'p1',
            icon: <Database className="size-6 text-primary" />,
            title: t('projects.items.p1.title'),
            description: t('projects.items.p1.description'),
            tech: t('projects.items.p1.tech', { returnObjects: true }) as string[],
        },
        {
            id: 'p2',
            icon: <Truck className="size-6 text-primary" />,
            title: t('projects.items.p2.title'),
            description: t('projects.items.p2.description'),
            tech: t('projects.items.p2.tech', { returnObjects: true }) as string[],
        },
        {
            id: 'p3',
            icon: <Network className="size-6 text-primary" />,
            title: t('projects.items.p3.title'),
            description: t('projects.items.p3.description'),
            tech: t('projects.items.p3.tech', { returnObjects: true }) as string[],
        },
    ];

    return (
        <section id="projects" className="px-6 md:px-20 lg:px-40 py-24 bg-white dark:bg-[#1a1b1c] transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {t('projects.title')}
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-[#242526] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="size-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {project.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm rounded-lg border border-slate-200 dark:border-slate-700 font-medium"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
