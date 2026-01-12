export default function FakeCode({ className = "" }: { className?: string }) {
  return (
    <pre className={`absolute text-xs text-foreground/10 font-mono whitespace-pre z-0 leading-snug md:-top-12 md:-left-12 top-10 left-20 w-full max-w-sm hidden sm:block ${className}`}>
      {`$ npm install developer
> Building for web...
import React from 'react';
import 'tailwindcss/tailwind.css';

const Developer = () => {
  return <FrontendDeveloper />;
};

export default Developer;

function FrontendDeveloper() {
  return "Beautiful & Responsive Websites";
}`}
    </pre>
  )
}
