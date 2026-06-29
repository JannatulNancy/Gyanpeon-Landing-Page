import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, Trophy, Bot, BarChart2, BookOpen } from 'lucide-react';
import { WHY_CHOOSE_BULLETS } from '../data';

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-[#6C63FF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100">
              <Sparkles className="w-3 h-3" />
              <span>WHY CHOOSE GYANPEON?</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight whitespace-pre-line leading-[1.15]">
              Everything you need.{"\n"}One platform to achieve it.
            </h2>

            <p className="mt-5 text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-[560px]">
              From School to BCS, GyanPeon brings everything you need to learn, practice, revise, and succeed all in one place.
            </p>

            {/* Bullet Points */}
            <div className="mt-8 space-y-4">
              {WHY_CHOOSE_BULLETS.map((bullet, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl hover:bg-[#FAF8FF] transition-colors border border-transparent hover:border-purple-100 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#6C63FF] text-white flex items-center justify-center shadow-md shadow-[#6C63FF]/25 shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-bold text-gray-800 text-base sm:text-[17px] group-hover:text-[#6C63FF] transition-colors">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA action */}
            <div className="mt-10">
              <a 
                href="#get-started" 
                className="inline-flex items-center gap-2 font-bold text-sm text-white bg-[#111111] hover:bg-[#6C63FF] px-8 py-4 rounded-[16px] shadow-lg transition-colors"
              >
                <span>Experience GyanPeon Free</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>


          {/* Right Visual Graphic Column */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto max-w-[540px]">
              
              {/* Main Glowing Canvas Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/20 via-purple-300/20 to-indigo-300/10 rounded-[36px] blur-2xl transform rotate-3" />
              
              {/* Premium Dashboard UI Stack Mockup */}
              <div className="relative bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-purple-100 space-y-6">
                
                {/* Header widget */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] text-white flex items-center justify-center font-bold text-xl shadow-md">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Daily Exam Battle</h4>
                      <p className="text-xs text-gray-400 font-medium">Nationwide SSC & HSC League</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full border border-emerald-100 animate-pulse">
                    ● Live 3,420
                  </span>
                </div>

                {/* Performance progress graph simulation */}
                <div className="bg-[#FAF8FF] p-5 rounded-2xl border border-purple-100/80 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                    <span className="flex items-center gap-1.5">
                      <BarChart2 className="w-4 h-4 text-[#6C63FF]" />
                      Accuracy Progression
                    </span>
                    <span className="text-[#6C63FF]">+24% This Month</span>
                  </div>
                  
                  {/* Mock bars */}
                  <div className="h-28 flex items-end justify-between gap-3 pt-4 px-2">
                    {[40, 55, 45, 70, 65, 85, 95].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <motion.div 
                          className="w-full bg-gradient-to-t from-[#6C63FF] to-[#8B5CF6] rounded-t-lg shadow-sm"
                          style={{ height: `${val}%` }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                        <span className="text-[10px] font-bold text-gray-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Tutor Assistant preview card */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 rounded-2xl shadow-xl flex items-start gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-[#6C63FF] flex items-center justify-center shrink-0 shadow-md">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-purple-300">AI Tutor Instant Solve</p>
                      <span className="text-[10px] text-gray-400">Just now</span>
                    </div>
                    <p className="text-xs text-gray-200 leading-relaxed">
                      "Here is the shortcut formula for Integration by Parts. Let's practice 3 sample BCS questions!"
                    </p>
                  </div>
                </div>

                {/* Mini trust stats footer */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl border border-gray-100 flex items-center gap-3 bg-white shadow-2xs">
                    <BookOpen className="w-5 h-5 text-[#6C63FF]" />
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Resources</p>
                      <p className="text-sm font-bold text-gray-900">25,000+ Notes</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-gray-100 flex items-center gap-3 bg-white shadow-2xs">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Model Tests</p>
                      <p className="text-sm font-bold text-gray-900">NCTB & Board</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
