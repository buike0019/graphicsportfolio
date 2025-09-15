export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-semibold text-blue-900 mb-2 md:mb-0">
        GraphiXPro
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 text-gray-800 font-medium text-sm md:text-base items-center ">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#service" className="hover:text-blue-600">Service</a>
        <a href="#testimonial" className="hover:text-blue-600">Testimonial</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      {/* Download CV Button */}
      <a
        href="#blog"
        className="mt-2 md:mt-0 bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Download CV
      </a>
    </nav>
  );
}
