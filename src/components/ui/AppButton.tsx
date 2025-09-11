import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AppButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: AppButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60 disabled:pointer-events-none disabled:opacity-50 shadow-lg';

  const variants = {
    primary:
      'bg-gradient-to-r from-pink-400 to-neon-purple text-white hover:opacity-90',
    secondary:
      'bg-secondary text-white hover:bg-secondary/80',
    outline:
      'border border-neon-pink text-neon-pink hover:bg-black hover:text-white hover:border-black dark:text-white dark:hover:bg-white/10 dark:bg-transparent dark:border-neon-purple dark:hover:text-white bg-transparent',
  };

  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-14 px-8 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;