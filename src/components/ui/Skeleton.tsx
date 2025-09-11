import React from "react";

function Skeleton({
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
export default Skeleton;