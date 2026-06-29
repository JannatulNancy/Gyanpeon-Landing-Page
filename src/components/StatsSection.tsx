import { motion } from 'motion/react';
import { Users, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data';

export default function StatsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-[#6C63FF]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#6C63FF]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#6C63FF]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#6C63FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#6C63FF]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#FAF8FF] via-purple-50/40 to-[#FAF8FF] border-y border-purple-100/60 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[20px] shadow-sm border border-purple-100/80 text-center flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-[#6C63FF] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4 [&>svg]:group-hover:text-white shadow-xs">
                {getIcon(stat.iconName)}
              </div>
              
              <h3 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-[42px] bg-gradient-to-r from-[#111111] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                {stat.value}
              </h3>
              
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
