export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 text-center">
      <p className="font-semibold text-lg mb-1">TourSphere</p>
      <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} TourSphere. All rights reserved.</p>
    </footer>
  );
}
