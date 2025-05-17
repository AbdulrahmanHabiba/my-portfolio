import { motion } from "motion/react";
import React from "react";

interface SectionMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionMotion: React.FC<SectionMotionProps> = ({
  children,
  className = "",
  delay = 0.1,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.07 }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionMotion;
