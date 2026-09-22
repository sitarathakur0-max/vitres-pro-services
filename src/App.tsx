import React, { useState, useEffect } from 'react';
import { PageId } from './data/business';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WindowCleaningPage } from './pages/WindowCleaningPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'window-cleaning',
      'residential',
      'commercial',
      'about',
      'faq',
      'contact',
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Handle URL hash changes & browser navigation (back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'window-cleaning',
        'residential',
        'commercial',
        'about',
        'faq',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title & SEO meta dynamically based on active page
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'Vitres Pro Services | Professional Window Cleaning in Lille',
      'window-cleaning': 'Window Cleaning Services in Lille | Vitres Pro Services',
      residential: 'Residential Window Cleaning in Lille | Vitres Pro Services',
      commercial: 'Commercial & Office Window Cleaning in Lille | Vitres Pro Services',
      about: 'About Vitres Pro Services | Local Window Cleaning in Lille',
      faq: 'FAQ — Window Cleaning Questions | Vitres Pro Services',
      contact: 'Contact Vitres Pro Services | 29 Rue Nationale, Lille',
    };

    document.title = pageTitles[activePage] || 'Vitres Pro Services | Professional Window Cleaning in Lille';

    // Update OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', document.title);
    }
  }, [activePage]);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fbfe] text-slate-900 font-sans">
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:p-3 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Navbar */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Page Content View */}
      <main id="main-content" className="flex-grow">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'window-cleaning' && <WindowCleaningPage onNavigate={handleNavigate} />}
        {activePage === 'residential' && <ResidentialPage onNavigate={handleNavigate} />}
        {activePage === 'commercial' && <CommercialPage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
