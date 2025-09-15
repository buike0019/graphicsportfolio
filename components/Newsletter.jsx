"use client";

import React from "react";

export default function Newsletter() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="bg-[#0f3556] text-white rounded-md px-10 py-12 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left">
          <h5 className="text-sm font-semibold mb-1">Subscribe Now</h5>
          <h2 className="text-3xl font-bold mb-2">Get My Newsletter</h2>
          <p className="text-sm text-gray-300">
            Get latest news, updates, tips and tricks from Us
          </p>
        </div>

        <form className="flex w-full max-w-md mx-auto lg:mx-0">
          <input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 px-4 py-2 rounded-l-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-r-md font-semibold transition duration-300"
          >
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
}
