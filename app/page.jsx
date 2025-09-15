import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Portfolio from '../components/Portfolio';
import Testimonials from "@/components/Testimonals";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Page from "@/components/Page";

<ContactSection />


export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans scroll-smooth md">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24"
      >
        {/* Left content */}
        <div className="md:w-1/2">
          <p className="text-blue-600 text-lg font-medium">Hello</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
            I'm <span className="text-blue-900">GraphixPro</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
            Senior Graphic <span className="text-blue-600">Designer</span>
          </h2>
          <p className="text-gray-600 text-md mt-4 max-w-md">
            I'm a creative designer based in New York, and I'm very passionate and dedicated to my work.
          </p>

          {/* Button & Social Icons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* About Me Button */}
            <button className="bg-blue-900 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
              About Me
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 text-xl text-gray-700">
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        {/* Right content (Image and floating icons) */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/images/graphicsx.png"
            alt="GraphixPro"
            className="w-72 md:w-96 object-cover z-10"
          />
          <img
            src="/images/ai.png"
            alt="AI"
            className="absolute top-0 left-0 w-12 md:w-16 animate-bounce"
          />
          <img
            src="/images/figma.png"
            alt="Figma"
            className="absolute bottom-8 left-16 w-19 md:w-18 animate-bounce"
          />
          <img
            src="/images/ps.png"
            alt="Photoshop"
            className="absolute top-12 right-0 w-12 md:w-14 animate-bounce"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#f8fafd] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="/icons/pixel-perfect.svg" alt="Pixel Perfect" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">Pixel Perfect</h3>
              <p className="text-gray-600 mt-2">I offer a range of the best services.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="/icons/high-quality.svg" alt="High Quality" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">High Quality</h3>
              <p className="text-gray-600 mt-2">Whether you need a new logo, website</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src="/icons/making-idea.svg" alt="Making Idea" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">Making Idea</h3>
              <p className="text-gray-600 mt-2">I offer a full suite of design services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let Me Introduce Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-blue-600 text-lg font-semibold">Let Me Introduce</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
              I’m Mr. GraphixPro -<br /> Expert Designer From New York
            </h2>
            <p className="text-gray-600 mt-6">
              As a graphic designer, I believe that design has the power to transform businesses and improve lives.
              With a degree in <span className="italic">Visual Communication</span> and <span className="italic">18</span> years of experience.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Hire Me
            </button>
          </div>

          {/* Image with Floating Badges */}
          <div className="relative md:w-1/2 flex justify-center">
            <img
              src="/images/About_1.png"
              alt="GraphixPro"
              className="rounded-xl object-cover w-full max-w-sm"
            />

            {/* Floating Badge: 18 Years Of Success */}
            <div className="absolute top-6 left-[-60px] bg-white py-4 px-6 rounded-xl shadow-lg w-32 text-center flex flex-col justify-center items-center ml-15">
              <p className="text-7xl font-extrabold text-blue-600 leading-none">18</p>
              <p className="text-xs font-medium text-gray-700 leading-tight mt-1">
                Years<br />Of<br />Success
              </p>
            </div>

            {/* Floating Badge: 9K Total Project */}
            <div className="absolute bottom-6 right-[-40px] bg-white py-4 px-6 rounded-xl shadow-lg w-32 text-center flex flex-col justify-center items-center mr-9">
              <p className="text-7xl font-extrabold text-blue-600 leading-none">9K</p>
              <p className="text-xs font-medium text-gray-700 leading-tight mt-1">
                Total<br />Project
              </p>
            </div>
          </div>
        </div>
      </section>
      <Portfolio/>
      {/* Skills Section */}
<section id="skills" className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8fafd]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/images/about_2.png" // Replace with your actual image path
        alt="GraphixPro"
        className="rounded-[100px_0_100px_0] w-[300px] sm:w-[350px] md:w-[400px] object-cover shadow-lg"
      />
    </div>

    {/* Right Skills */}
    <div className="md:w-1/2">
      <p className="text-blue-600 text-sm font-semibold uppercase">Creation is Life</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
        To Stay Current, I <br className="hidden sm:block" /> Routinely Gain New Abilities.
      </h2>
      <p className="text-gray-600 mt-4">
        I have a proven track record of delivering high-quality design solutions that meet my clients' needs and exceed their expectations.
      </p>

      {/* Skill Bars */}
      <div className="mt-8 space-y-6">
        {/* Illustrator */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-800">Illustrator</span>
            <span className="text-sm text-gray-700">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>

        {/* Photoshop */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-800">Photoshop</span>
            <span className="text-sm text-gray-700">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* Figma */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-800">Figma</span>
            <span className="text-sm text-gray-700">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
{/* Service Section */}
<section id="service" className="bg-white py-20 px-4 sm:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-blue-600 text-sm font-semibold uppercase">Services</p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
      I Provide Excellent, <br className="hidden sm:block" /> Reasonable
    </h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Most common methods for designing websites that work well on desktop is responsive and adaptive design
    </p>

    {/* Cards */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { title: "Product Design", icon: "/icons/product.png" },
        { title: "UI Design", icon: "/icons/ui.png" },
        { title: "Logo Design", icon: "/icons/logo.png" },
        { title: "Icon Design", icon: "/icons/icon.png" },
        { title: "Layout Design", icon: "/icons/layout.png" },
        { title: "Animation Design", icon: "/icons/animation.png" }
      ].map(({ title, icon }) => (
        <div
          key={title}
          className="group rounded-xl bg-white shadow-md p-6 text-center transition duration-300 hover:bg-blue-800 hover:text-white  flex flex-col justify-center items-center mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-800 group-hover:bg-blue-600 p-3 rounded-lg transition duration-300">
              <img
                src={icon}
                alt={title}
                className="w-6 h-6 invert group-hover:invert-0 transition duration-300"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm">
            Web design refers to the design of websites that are displayed on the internet.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
 <Testimonials />
 <Partners />
 <Newsletter />
 <ContactSection />
 
</section>
<footer className="bg-[#0d2c45] text-white pt-16 pb-6">
  <div className="container mx-auto px-6 grid md:grid-cols-5 gap-8">

    {/* Logo + Description + Social Icons */}
    <div className="md:col-span-1 space-y-4">
      <h2 className="text-2xl font-semibold">GraphiXPro</h2>
      <p className="text-sm leading-relaxed">
        Check out these all things from some of the template form what I do.
      </p>
       <div className="flex items-center space-x-6 text-xl text-gray-700">
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-twitter"></i></a>
            </div>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Services</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Design</a></li>
        <li><a href="#" className="hover:underline">Development</a></li>
        <li><a href="#" className="hover:underline">Marketing</a></li>
        <li><a href="#" className="hover:underline">Content Writing</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Company</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Terms</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Portfolio */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Portfolio</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Portfolio</a></li>
        <li><a href="#" className="hover:underline">Single Case</a></li>
        <li><a href="#" className="hover:underline">Payment</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Phone: 971 5546 963</li>
        <li>Email: example@mail.com</li>
        <li>Address: Dallas, USA - 23245</li>
      </ul>
    </div>
  </div>

  {/* Bottom copyright */}
  <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
    &copy; Copyright <strong>GraphiXPro</strong>. All Rights Reserved
  </div>
</footer>

      <Page />
    </div>
    
  );
}
