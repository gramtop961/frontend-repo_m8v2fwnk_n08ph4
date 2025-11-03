import HeroSection from "./components/HeroSection";
import TopicsGrid from "./components/TopicsGrid";
import ScheduleCTA from "./components/ScheduleCTA";
import FAQSection from "./components/FAQSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-manrope text-lg font-extrabold tracking-tight text-slate-900">
            C2 Club
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#topics" className="hover:text-indigo-600">Topics</a>
            <a href="#schedule" className="hover:text-indigo-600">Schedule</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#apply" className="rounded-lg bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700">Apply</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <TopicsGrid />
        <ScheduleCTA />
        <FAQSection />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} C2 Conversation Club. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Code of Conduct</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="mailto:apply@c2club.example" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
