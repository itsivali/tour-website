import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tours", label: "Tours" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <motion.nav
      className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="font-bold text-xl tracking-tight">TourSphere</Link>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`hover:text-blue-200 transition ${pathname === link.to ? "text-white font-semibold underline underline-offset-4" : "text-blue-100"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
