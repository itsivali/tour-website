import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, title: "Safari Escapes", subtitle: "Wildlife, bush dinners, starlight", image: "/hero-1.jpg" },
  { id: 2, title: "Coastal Retreats", subtitle: "Pristine beaches & calm seas", image: "/hero-2.jpg" },
  { id: 3, title: "Mountain Trails", subtitle: "Hikes with epic views", image: "/hero-3.jpg" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const next = () => { clearTimeout(timeoutRef.current); setIndex((i) => (i + 1) % slides.length); };
  const prev = () => { clearTimeout(timeoutRef.current); setIndex((i) => (i - 1 + slides.length) % slides.length); };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-full bg-black/35 flex items-center">
            <div className="container mx-auto px-6 text-white">
              <h2 className="text-4xl md:text-6xl font-bold">{slides[index].title}</h2>
              <p className="mt-3 text-lg md:text-xl">{slides[index].subtitle}</p>
              <div className="mt-6">
                <button onClick={prev} className="mr-3 px-4 py-2 rounded bg-white/10">Prev</button>
                <button onClick={next} className="px-4 py-2 rounded bg-white">Explore</button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-6 flex gap-2">
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}
