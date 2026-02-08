import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 py-2 px-4 rounded-2xl text-sm font-medium shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                 bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
