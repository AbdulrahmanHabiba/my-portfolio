import React, { useState, useRef } from "react";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex items-start gap-4 p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 glass-card overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--neon-pink), transparent 40%)`,
          opacity: 0.1
        }}
      />

      {/* Icon */}
      <div className="relative z-10 text-3xl sm:text-4xl text-neon-purple group-hover:scale-110 group-hover:text-neon-pink transition-all duration-300">
        {icon}
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:translate-x-1 transition-transform">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
