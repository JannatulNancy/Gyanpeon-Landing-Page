import { motion } from 'motion/react';
import { useLanding } from '../context/LandingContext';
import { ArrowRight, Star, GraduationCap } from 'lucide-react';

export default function FeaturedPrograms() {
  const { state } = useLanding();
  const { featuredPrograms } = state;

  // Filter only visible ones
  const visiblePrograms = featuredPrograms.filter(p => p.visible);

  if (visiblePrograms.length === 0) return null;

  return (
    <section id="featured-programs" className="py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 text-[#6C4CF5] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-[#6C4CF5]" />
            <span>SEASON SPECIALS</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            Featured Programs
          </h2>
          <p className="mt-3 text-slate-500 font-medium text-[15px] sm:text-base leading-relaxed">
            Explore our most popular admission campaigns and preparation programs.
          </p>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePrograms.map((prog, idx) => (
            <motion.div
              key={prog.id}
              className="group bg-white rounded-[20px] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image wrap */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img 
                  src={prog.image} 
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#6C4CF5] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  Active Batch
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#6C4CF5] transition-colors line-clamp-1">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50">
                  <a 
                    href="#get-started" 
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#6C4CF5] group-hover:gap-2 transition-all"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
