import type { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  underline?: boolean;
}

const Title = ({ children, className = '', as: Component = 'p' ,underline = true  }: TitleProps) => {
  return (
      <Component
          className={`relative text-4xl sm:text-5xl font-semibold uppercase tracking-wider   ${Component === 'h1' && 'lg:text-6xl '} ${underline && 'mb-12'} ${className}`}
      >
           <span
               className="relative block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
              {children}

            </span>
        {underline && <span className="absolute -bottom-3 left-0 h-1 w-44  bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mt-2"/>}

      </Component>
  );
};

export default Title; 