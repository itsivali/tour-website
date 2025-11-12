import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <motion.div
        className="h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-center">Explore the World with Us</h1>
        <p className="text-xl text-center">Discover amazing tours and experiences</p>
      </motion.div>
    </div>
  );
};

export default Hero;
