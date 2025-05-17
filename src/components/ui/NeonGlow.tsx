import React from "react";

interface NeonGlowProps {
  className?: string;
  size?: number | string;
  colorFrom?: string;
  colorTo?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

const NeonGlow: React.FC<NeonGlowProps> = ({
  className = "",
  size = 200,
  colorFrom = "#ec4899", // pink-400
  colorTo = "#a21caf",   // purple-800
  top,
  left,
  right,
  bottom,
  opacity = 0.25,
}) => {
  const style: React.CSSProperties = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    position: "absolute",
    top,
    left,
    right,
    bottom,
    opacity,
    pointerEvents: "none",
    zIndex: 0,
  };
  return (
    <div
      className={`rounded-full blur-3xl ${className}`}
      style={{
        ...style,
        background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
      }}
    />
  );
};

export default NeonGlow; 