import React from "react";

export default function Skeleton({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-secondary/40 rounded-md ${className}`}
      {...props}
    />
  );
}
