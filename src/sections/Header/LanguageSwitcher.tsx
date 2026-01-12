const LanguageSwitcher = () => {
  return (
    <button
      type="button"
      aria-label="Switch language to English"
      className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-secondary/50 text-foreground shadow-sm hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-150 focus:outline-none ring-1 ring-neon-purple/5 opacity-80 hover:opacity-100"
    >
      <span className="text-xs font-bold">EN</span>
    </button>
  );
};

export default LanguageSwitcher;
