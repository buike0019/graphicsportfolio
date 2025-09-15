"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left side: Form */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us A Message</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Write your message"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition">
            Send Message
          </button>
        </div>

        {/* Right side: Contact Info */}
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>

          <div className="flex items-start gap-3">
            <Mail className="text-blue-600 mt-1" />
            <div>
              <p className="text-sm text-gray-600">Graphix@pro.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-blue-600 mt-1" />
            <div>
              <p className="text-sm text-gray-600">+00 (0) 12 345 6789</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600 mt-1" />
            <div>
              <p className="text-sm text-gray-600">
                100 Banbridge Road, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
