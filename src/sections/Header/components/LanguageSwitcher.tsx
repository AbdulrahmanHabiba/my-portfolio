const LanguageSwitcher = () => {
  return (
    <button
      type="button"
      aria-label="Switch language to English"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-pink-400 bg-white/10 text-pink-800 dark:text-pink-400 shadow-md hover:bg-pink-400 hover:text-white active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-pink-400"
    >
      EN
    </button>
  );
};

export default LanguageSwitcher;
