import { motion } from 'motion/react';
import { Sparkles, Timer, Bot, Trophy, Users, CheckCircle2, Play, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-hero-gradient">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            
            {/* Small Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDE9FE] text-[#6C63FF] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-purple-200/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#6C63FF] fill-[#6C63FF]" />
              <span> EVERY EXAM. ONE DESTINATION.</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-[46px] sm:text-[58px] xl:text-[68px] leading-[1.1] text-[#111111] tracking-tight">
              Your All-in-One <br />
              Study Powerhouse.
            </h1>

            {/* Highlight Text with Orange Underline */}
            <div className="mt-3 relative inline-block">
              <span className="font-serif font-bold text-[36px] sm:text-[46px] xl:text-[54px] bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#a344ff] bg-clip-text text-transparent">
                Ace Every Exam.
              </span>
              {/* Orange Underline SVG Stroke */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 text-[#F97316]" 
                viewBox="0 0 240 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M4 12C58.3333 4.66667 141.6 -3.6 236 10" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* NEW LINE: Slogan Line */}
            <h2 className="mt-6 font-semibold text-[#6C63FF] text-[22px] sm:text-[24px] tracking-normal">
              Learn. Practice. Compete. Succeed.
            </h2>

            {/* Description */}
            <p className="mt-5 text-[#6B7280] text-[18px] leading-[1.7] max-w-[520px]">
              From School to BCS - everything you need to learn, practice, and achieve your goals. Smarter preparation, better results, brighter future.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* Primary Button */}
              <motion.a
                href="#get-started"
                className="h-[56px] px-8 rounded-[16px] bg-[#6C63FF] text-white font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-[#6C63FF]/30 transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Learning Free</span>
                <span className="text-lg">→</span>
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#courses"
                className="h-[56px] px-8 rounded-[16px] bg-white text-[#111111] border border-gray-200 font-bold text-base flex items-center justify-center gap-2 shadow-sm hover:border-purple-200 hover:bg-purple-50/40 transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Courses</span>
                <span className="text-lg">→</span>
              </motion.a>
            </div>

            {/* Quick Mini Trust Bar */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                <span>NCTB Aligned</span>
              </div>
            </div>

          </motion.div>


          {/* Right Column: Mobile App Mockup with Floating Feature Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] lg:min-h-[620px]">
            
            {/* Glowing Backdrop behind mockup */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#6C63FF]/30 to-[#8B5CF6]/20 rounded-full blur-2xl -z-10 animate-pulse duration-1000" />
            
            {/* Realistic iPhone Mockup Frame */}
            <motion.div 
              className="relative z-10 w-[280px] sm:w-[310px] bg-[#111111] rounded-[48px] p-3 shadow-2xl shadow-purple-900/30 border-4 border-gray-800 animate-float"
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#111111] rounded-full z-30 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-gray-800 rounded-full" />
              </div>

              {/* Phone Screen Screen */}
              <div className="bg-white rounded-[40px] overflow-hidden relative min-h-[580px] flex flex-col">
                
                {/* App Top Header Mock */}
                <div className="bg-gradient-to-b from-[#6C63FF] to-[#8B5CF6] pt-12 pb-6 px-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-purple-200">Welcome Back 👋</p>
                      <p className="text-lg font-bold">Tanvir Ahmed</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      TA
                    </div>
                  </div>

                  {/* Search/Goal Banner inside phone */}
                  <div className="mt-4 bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <Trophy className="w-4 h-4 text-amber-300" />
                      <span>BUET Target 2026</span>
                    </div>
                    <span className="text-[10px] bg-white text-[#6C63FF] font-bold px-2 py-0.5 rounded-full">Active</span>
                  </div>
                </div>

                {/* App Body Content Mock */}
                <div className="p-4 flex-1 bg-[#FAF8FF] space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                    <span>Today's Live Exam</span>
                    <span className="text-rose-500 flex items-center gap-1">🔴 Live Now</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-purple-100 space-y-2">
                    <p className="text-xs font-bold text-gray-900">Higher Math - Chapter 4 (Circle)</p>
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span>Time: 25 Mins</span>
                      <span>Marks: 30</span>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <div className="flex-1 bg-[#6C63FF] text-white text-center py-1.5 rounded-xl text-xs font-bold">
                        Join Exam
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-gray-800 pt-1">Recommended Practice</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-50 text-center">
                      <span className="text-xl">⚡</span>
                      <p className="text-[11px] font-bold mt-1 text-gray-800">Quick Quiz</p>
                      <p className="text-[9px] text-gray-400">10 MCQs</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-50 text-center">
                      <span className="text-xl">🤖</span>
                      <p className="text-[11px] font-bold mt-1 text-gray-800">AI Solve</p>
                      <p className="text-[9px] text-gray-400">Step by step</p>
                    </div>
                  </div>

                  {/* Leaderboard preview box */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-50 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                      #1
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-gray-800">Nationwide Rank</p>
                      <p className="text-[9px] text-emerald-600 font-semibold">Top 0.5% in Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Phone bottom bar navigation mock */}
                <div className="bg-white border-t border-gray-100 py-2.5 px-6 flex justify-between items-center text-gray-400">
                  <div className="flex flex-col items-center text-[#6C63FF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] mb-0.5" />
                    <span className="text-[9px] font-bold">Home</span>
                  </div>
                  <span className="text-[9px]">Exams</span>
                  <span className="text-[9px]">AI Teacher</span>
                  <span className="text-[9px]">Profile</span>
                </div>
              </div>
            </motion.div>


            {/* Floating Card 1: Live Exams */}
            <motion.div 
              className="absolute -left-6 sm:-left-12 top-16 bg-white px-4 py-3 rounded-[20px] shadow-xl shadow-purple-900/10 border border-purple-100 flex items-center gap-3 z-20 animate-float-delayed"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                <Timer className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Feature</p>
                <p className="text-sm font-bold text-gray-900">Live Exams</p>
              </div>
            </motion.div>

            {/* Floating Card 2: AI Teacher */}
            <motion.div 
              className="absolute -right-4 sm:-right-10 top-28 bg-white px-4 py-3 rounded-[20px] shadow-xl shadow-purple-900/10 border border-purple-100 flex items-center gap-3 z-20 animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-[#6C63FF]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">24/7 Help</p>
                <p className="text-sm font-bold text-gray-900">AI Teacher</p>
              </div>
            </motion.div>

            {/* Floating Card 3: Leaderboard */}
            <motion.div 
              className="absolute -left-4 sm:-left-8 bottom-28 bg-white px-4 py-3 rounded-[20px] shadow-xl shadow-purple-900/10 border border-purple-100 flex items-center gap-3 z-20 animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Compete</p>
                <p className="text-sm font-bold text-gray-900">Leaderboard</p>
              </div>
            </motion.div>

            {/* Floating Card 4: Active Students */}
            <motion.div 
              className="absolute -right-6 sm:-right-8 bottom-12 bg-white px-4 py-3 rounded-[20px] shadow-xl shadow-purple-900/10 border border-purple-100 flex items-center gap-3 z-20 animate-float-delayed"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Nationwide</p>
                <p className="text-sm font-bold text-gray-900">Active Students</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
