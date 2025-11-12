// simple shadcn-like button (no extra build step required)
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 py-2 px-4 rounded-2xl text-sm font-medium shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                 bg-gradient-to-br from-blue-600 to-indigo-600 text-white ${className}`}
    >
      {children}
    </button>
  );
}
