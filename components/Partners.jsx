"use client";

import React from "react";

const partners = [
  "Skrill",
  "Hooli",
  "FedEx",
  "NETFLIX",
  "WEPAY",
  "ember",
];

export default function Partners() {
  return (
    <section className="py-12 text-center">
      <h5 className="text-sm text-indigo-600 font-semibold mb-2">Partner’s</h5>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Variable Partner’s</h2>

      <div className=" shadow-lg rounded-xl px-8 py-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-gray-400 font-bold hover:text-blue-600 text-lg border-r last:border-none pr-4 last:pr-0">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
