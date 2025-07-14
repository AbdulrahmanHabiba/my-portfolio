import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

const Container = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) => {
  return (
    <Component className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
};

export default Container; 