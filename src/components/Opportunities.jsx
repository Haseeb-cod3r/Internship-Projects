import React from "react";
import { Search } from "lucide-react";
export default function Opportunities() {
  return (
    <div className="bg-[var(--bg)] px-10 py-10 flex justify-center">
      <section className=" bg-[#0a1733] flex items-center justify-center px-4 py-20 relative overflow-hidden w-[1300px] rounded-2xl">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10 mt-30 mb-30">
          <div className="bg-white rounded-full p-1 pr-5 mb-8 inline-flex items-center gap-3 animate-fade-in-down">
            <span className="bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              Trending
            </span>
            <span className="text-[#1a1a1a] text-sm font-medium">
              Explore Internship Opportunities
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.15]">
            Unlock New Opportunities <br className="hidden md:block" />
            With Top-tier Internships.
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-10 leading-relaxed font-light">
            Take the first step toward a successful career with Internee.pk.
            Explore top internships, gain hands-on experience, and earn a
            valuable certificate.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
              className="w-full sm:w-auto bg-[#489b2c] hover:bg-[#3d8525] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-sm md:text-base shadow-lg hover:shadow-xl cursor-pointer"
              aria-label="Get Started Now"
            >
              Get Started Now
            </a>

            <a
              href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
              className="w-full sm:w-auto bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base group cursor-pointer"
              aria-label="Explore Internships"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Explore Internships</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
