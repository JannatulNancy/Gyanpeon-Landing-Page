/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CoursesSection from './components/CoursesSection';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#6C63FF] selection:text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <CoursesSection />
        <FeaturesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

