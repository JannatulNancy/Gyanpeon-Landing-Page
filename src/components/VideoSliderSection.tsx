import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight, Info, CreditCard, Sparkles, GraduationCap } from 'lucide-react';
import { useLanding } from '../context/LandingContext';

export default function VideoSliderSection() {
  const { state } = useLanding();
  const visibleSlides = state.videoSlides?.filter(slide => slide.visible) || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    if (visibleSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visibleSlides.length);
    }, 6000); // changes every 6 seconds
    return () => clearInterval(interval);
  }, [visibleSlides.length]);

  if (visibleSlides.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleSlides.length) % visibleSlides.length);
  };

  const currentSlide = visibleSlides[currentIndex];

  return (
    <section id="video-slider" className="w-full relative overflow-hidden bg-black">
      {/* Full-bleed, edge-to-edge immersive stream slider box */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background cover image - covers full screen with no letterbox borders */}
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title} 
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-10000 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Immersive Cinematic Overlay Gradients */}
            {/* 1. Dark bottom vignette for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10" />
            {/* 2. Soft left vignette for left-aligned content readable area */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            {/* 3. Top subtle vignette for upper header bar */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />

            {/* Content Container (absolutely overlayed and aligned with main container layout) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:py-10">
              
              {/* Top Floating Bar */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center gap-1.5 font-mono">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    RUNNING & FEATURED PLANS
                  </span>
                </div>
                
                {/* Arrow navigation buttons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-black border border-white/15 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
                    aria-label="Previous stream"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-black border border-white/15 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
                    aria-label="Next stream"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Bottom Row containing Main details (left) and Bullet indicators (right) */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
                
                {/* Left Part: Course Details */}
                <div className="max-w-[720px] text-white space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] sm:text-[11px] font-black tracking-widest uppercase w-fit shadow-lg shadow-emerald-500/25 border border-emerald-400/20"
                  >
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-yellow-300" />
                    {currentSlide.badge}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white drop-shadow-md leading-tight"
                  >
                    {currentSlide.title}
                  </motion.h3>

                  {currentSlide.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-slate-200 text-xs sm:text-base lg:text-lg max-w-xl font-medium line-clamp-2 sm:line-clamp-none drop-shadow-sm"
                    >
                      {currentSlide.description}
                    </motion.p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-bold font-mono"
                    >
                      <Calendar className="w-4 h-4 text-[#F59E0B]" />
                      <span>{currentSlide.timeText}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="flex flex-wrap items-center gap-2.5 sm:gap-3"
                    >
                      <a 
                        href={currentSlide.linkUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6C4CF5] hover:bg-[#583ae0] hover:shadow-xl hover:shadow-[#6C4CF5]/20 text-white rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Purchase</span>
                      </a>
                      <a 
                        href="#pricing"
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs sm:text-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 border border-white/10 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>View Plan</span>
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Right Part: Bullet dots indicators inside container */}
                <div className="flex gap-2 bg-black/40 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-white/10 w-fit self-center sm:self-auto mb-2">
                  {visibleSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-6 bg-[#6C4CF5]' : 'w-2 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
