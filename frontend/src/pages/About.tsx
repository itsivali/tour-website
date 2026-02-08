import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About TourSphere
      </motion.h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          TourSphere connects travelers with unforgettable experiences across
          East Africa. From wildlife safaris in the Maasai Mara to serene
          coastal escapes along the Indian Ocean, we curate tours that
          immerse you in nature, culture, and adventure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Guides</h3>
            <p className="text-sm text-gray-600">
              Our local guides bring deep knowledge of wildlife, history, and hidden gems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Tailored Trips</h3>
            <p className="text-sm text-gray-600">
              Every tour is customizable to match your pace, interests, and budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Sustainable Travel</h3>
            <p className="text-sm text-gray-600">
              We partner with eco-lodges and conservation programs to protect the places you visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
