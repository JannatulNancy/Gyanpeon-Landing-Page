import { useState } from 'react';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';
import ButterflyLogo from './ButterflyLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="about" className="bg-[#111111] text-white pt-20 pb-12 border-t border-gray-900">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          {/* Col 1: About Gyanpeon (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center text-white shadow-md">
                <ButterflyLogo className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Gyan<span className="text-[#6C63FF]">peon</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed pr-6">
              Your all-in-one learning platform for School, SSC, HSC, Admission, and BCS preparation.
            </p>

            {/* Download App badges */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Download App</p>
              <div className="flex flex-wrap gap-3">
                <a href="#download" className="flex items-center gap-2 px-3.5 py-2 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 transition-colors text-xs font-bold">
                  <span>▶️ Google Play</span>
                </a>
                <a href="#download" className="flex items-center gap-2 px-3.5 py-2 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 transition-colors text-xs font-bold">
                  <span>🍎 App Store</span>
                </a>
              </div>
            </div>
          </div>


          {/* Col 2: Courses (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide">Courses</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li><a href="#school" className="hover:text-[#6C63FF] transition-colors">School</a></li>
              <li><a href="#ssc" className="hover:text-[#6C63FF] transition-colors">SSC</a></li>
              <li><a href="#hsc" className="hover:text-[#6C63FF] transition-colors">HSC</a></li>
              <li><a href="#admission" className="hover:text-[#6C63FF] transition-colors">Admission</a></li>
              <li><a href="#bcs" className="hover:text-[#6C63FF] transition-colors">BCS</a></li>
            </ul>
          </div>


          {/* Col 3: Platform (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide">Platform</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li><a href="#features" className="hover:text-[#6C63FF] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#6C63FF] transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-[#6C63FF] transition-colors">Blog</a></li>
              <li><a href="#live-exams" className="hover:text-[#6C63FF] transition-colors">Live Exams</a></li>
              <li><a href="#ai-tutor" className="hover:text-[#6C63FF] transition-colors">AI Tutor</a></li>
            </ul>
          </div>


          {/* Col 4: Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-[#6C63FF] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#6C63FF] transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-[#6C63FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#6C63FF] transition-colors">Terms of Service</a></li>
            </ul>
          </div>


          {/* Col 5: Stay Updated / Newsletter (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide">Stay Updated</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get the latest study tips, exam updates, and important announcements.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#6C63FF] pr-10"
                    required
                  />
                  <button type="submit" aria-label="Subscribe" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#6C63FF] transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>


        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Gyanpeon Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>🇧🇩 Made with ❤️ for Bangladesh Learners</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
