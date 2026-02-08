import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-white rounded-2xl p-4 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
