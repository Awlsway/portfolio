/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BadgeSection } from './components/BadgeSection';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <BadgeSection />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}
