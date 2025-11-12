import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="font-bold text-xl">TourSphere</Link>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
