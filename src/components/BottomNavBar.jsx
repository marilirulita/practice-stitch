import { Link } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#dbffe8]/60 backdrop-blur-xl z-50 rounded-t-[3rem] shadow-[0_-4px_24px_rgba(1,54,34,0.06)]">
        <Link
          to="/"
          className="flex flex-col items-center justify-center bg-emerald-200 text-emerald-900 rounded-full px-5 py-2 transition-all active:scale-90 duration-300"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="font-headline text-[10px] uppercase tracking-widest font-bold mt-1">
            Home
          </span>
        </Link>

        <Link
          to="/lessons"
          className="flex flex-col items-center justify-center text-emerald-800/60 px-5 py-2 hover:bg-emerald-100 transition-colors active:scale-90 duration-300"
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-headline text-[10px] uppercase tracking-widest font-bold mt-1">
            Lessons
          </span>
        </Link>

        <Link
          to="/community"
          className="flex flex-col items-center justify-center text-emerald-800/60 px-5 py-2 hover:bg-emerald-100 transition-colors active:scale-90 duration-300"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="font-headline text-[10px] uppercase tracking-widest font-bold mt-1">
            Community
          </span>
        </Link>

        <Link
          to="/profile"
          className="flex flex-col items-center justify-center text-emerald-800/60 px-5 py-2 hover:bg-emerald-100 transition-colors active:scale-90 duration-300"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-headline text-[10px] uppercase tracking-widest font-bold mt-1">
            Profile
          </span>
        </Link>
      </nav>

      {/* Floating Action Button (Daily Challenge) */}
      <button className="fixed bottom-28 right-6 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-95 duration-200 z-40">
        <span className="material-symbols-outlined text-3xl">psychology</span>
      </button>
    </>
  );
}