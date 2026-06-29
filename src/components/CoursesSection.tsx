import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Target, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { COURSES_DATA } from '../data';

export default function CoursesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-purple-600" />;
      case 'Award': return <Award className="w-8 h-8 text-emerald-600" />;
      case 'Target': return <Target className="w-8 h-8 text-amber-600" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-rose-600" />;
      default: return <BookOpen className="w-8 h-8 text-blue-600" />;
    }
  };

  const getGlowColor = (id: string) => {
    switch (id) {
      case 'school': return 'group-hover:shadow-blue-500/15 group-hover:border-blue-300/60';
      case 'ssc': return 'group-hover:shadow-purple-500/15 group-hover:border-purple-300/60';
      case 'hsc': return 'group-hover:shadow-emerald-500/15 group-hover:border-emerald-300/60';
      case 'admission': return 'group-hover:shadow-amber-500/15 group-hover:border-amber-300/60';
      case 'bcs': return 'group-hover:shadow-rose-500/15 group-hover:border-rose-300/60';
      default: return 'group-hover:shadow-purple-500/15';
    }
  };

  return (
    <section id="courses" className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#FAF8FF]/60 to-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-[#6C63FF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3" />
            <span>CHOOSE YOUR PATH</span>
          </motion.div>
          
          <motion.h2 
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Courses for Every learner
          </motion.h2>

          <motion.p 
            className="mt-4 text-[#6B7280] text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you're preparing for Academic school exams, board exams, admission tests, or BCS - choose your path and start learning smarter.
          </motion.p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course, index) => (
            <motion.div
              key={course.id}
              className={`group bg-white/80 backdrop-blur-md rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden ${getGlowColor(course.id)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Top ambient glow blob inside card on hover */}
              <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white transition-colors flex items-center justify-center shadow-sm border border-gray-100/80">
                    {getIcon(course.iconName)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${course.accentColor}`}>
                    {course.gradeBadge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#111111] mb-3 group-hover:text-[#6C63FF] transition-colors">
                  {course.title}
                </h3>

                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8">
                  {course.description}
                </p>
              </div>

              {/* Card Action CTA Button */}
              <a 
                href={`#${course.id}`}
                className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-xl bg-gray-50 group-hover:bg-[#6C63FF] group-hover:text-white text-gray-800 font-bold text-sm transition-all duration-300 group/btn shadow-sm"
              >
                <span>{course.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>

            </motion.div>
          ))}

          {/* 6th diagnostic promotional card to balance 3-col grid */}
          <motion.div
            className="group bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] rounded-[24px] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 font-serif select-none pointer-events-none">
              ✨
            </div>

            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
                NEED CUSTOM HELP?
              </span>
              <h3 className="font-serif font-bold text-2xl text-white mt-1 mb-3">
                Talk to an AI Counselor
              </h3>
              <p className="text-purple-100 text-[15px] leading-relaxed mb-8">
                Not sure where to begin? Let our smart AI diagnostic assistant generate a customized study schedule tailored for your target exam.
              </p>
            </div>

            <a 
              href="#diagnostic"
              className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-xl bg-white text-[#6C63FF] font-bold text-sm hover:bg-purple-50 transition-colors shadow-lg"
            >
              <span>Take Diagnostic Quiz →</span>
              <ArrowRight className="w-4 h-4 text-[#6C63FF]" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
