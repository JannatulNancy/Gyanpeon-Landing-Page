import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Target, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { useLanding } from '../context/LandingContext';

export default function CoursesSection() {
  const { state } = useLanding();
  const { coursesHeading, coursesSubheading, coursesDescription, coursesList } = state;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-7 h-7 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-7 h-7 text-purple-600" />;
      case 'Award': return <Award className="w-7 h-7 text-emerald-600" />;
      case 'Target': return <Target className="w-7 h-7 text-amber-600" />;
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-rose-600" />;
      default: return <BookOpen className="w-7 h-7 text-blue-600" />;
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

  // Filter only visible courses
  const visibleCourses = coursesList.filter(course => course.visible);

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white via-[#FAF8FF]/60 to-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-[#6C4CF5] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{coursesHeading}</span>
          </motion.div>
          
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight leading-tight">
            {coursesSubheading}
          </h2>

          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
            {coursesDescription}
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="group bg-white rounded-[24px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div>
                {/* Course Image Header */}
                {course.image ? (
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border ${course.accentColor} shadow-md`}>
                      {course.gradeBadge}
                    </span>
                  </div>
                ) : (
                  <div className="p-8 pb-0 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors flex items-center justify-center border border-slate-100 shadow-sm">
                      {getIcon(course.iconName)}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${course.accentColor}`}>
                      {course.gradeBadge}
                    </span>
                  </div>
                )}

                {/* Card Content details */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-[#111111] mb-2 group-hover:text-[#6C4CF5] transition-colors line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Action CTA Button */}
              <div className="p-6 pt-0">
                <a 
                  href="#get-started"
                  className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-xl bg-slate-50 group-hover:bg-[#6C4CF5] group-hover:text-white text-slate-800 font-bold text-sm transition-all duration-300 group/btn border border-transparent"
                >
                  <span>{course.buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

            </motion.div>
          ))}

          {/* 6th promo banner inside grid for aesthetic balance */}
          <motion.div
            className="group bg-gradient-to-br from-[#6C4CF5] to-[#8B5CF6] rounded-[24px] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 font-serif select-none pointer-events-none">
              ✨
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-200">
                NEED CUSTOM ROADMAP?
              </span>
              <h3 className="font-serif font-bold text-2xl text-white mt-1 mb-2">
                Interactive AI Study Planner
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed mb-8">
                Tell us your target exam, daily study budget, and weak units to see a simulated daily schedule and dynamic checklist!
              </p>
            </div>

            <a 
              href="#ai-planner"
              className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-xl bg-white text-[#6C4CF5] font-bold text-sm hover:bg-purple-50 transition-colors shadow-lg"
            >
              <span>Try AI Planner →</span>
              <ArrowRight className="w-4 h-4 text-[#6C4CF5]" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
