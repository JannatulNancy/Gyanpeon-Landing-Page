import { motion } from 'motion/react';
import { FileText, Timer, Zap, Database, Swords, Bot, Users, MessageSquare, Trophy, BarChart3, Sparkles } from 'lucide-react';
import { FEATURES_DATA } from '../data';

export default function FeaturesSection() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-[#6C63FF]" />;
      case 'Timer': return <Timer className="w-6 h-6 text-[#6C63FF]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#6C63FF]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#6C63FF]" />;
      case 'Swords': return <Swords className="w-6 h-6 text-[#6C63FF]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#6C63FF]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#6C63FF]" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-[#6C63FF]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#6C63FF]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#6C63FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#6C63FF]" />;
    }
  };

  return (
    <section id="features" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative ambient background lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-[#6C63FF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3" />
            <span>EVERYTHING YOU NEED</span>
          </motion.div>
          
          <motion.h2 
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight whitespace-pre-line"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Powerful Tools.{"\n"}Smarter Preparation.
          </motion.h2>

          <motion.p 
            className="mt-5 text-[#6B7280] text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to learn, practice, compete, and improve all in one platform.
          </motion.p>
        </div>

        {/* 10 Features Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.number}
              className={`group bg-white/80 backdrop-blur-xl rounded-[20px] p-7 border border-gray-100/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(108,99,255,0.12)] hover:border-[#6C63FF]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                idx === 9 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              {/* Subtle glass glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/0 via-[#6C63FF]/0 to-[#8B5CF6]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-[#6C63FF] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm border border-purple-100/60">
                    <span className="group-hover:scale-110 transition-transform duration-300 [&>svg]:group-hover:text-white">
                      {getFeatureIcon(feature.iconName)}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-xl text-gray-200 group-hover:text-purple-300 transition-colors select-none">
                    {feature.number}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-[#111111] mb-2.5 group-hover:text-[#6C63FF] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-[#6B7280] text-sm sm:text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="w-8 h-1 bg-purple-100 group-hover:w-full group-hover:bg-[#6C63FF] transition-all duration-300 rounded-full mt-6" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
