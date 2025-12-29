"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would submit to an API
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section id="signup" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Be the First to Know When We Launch
          </h2>
          <p className="section-subheading mb-8">
            Join our waitlist and get early access to RentKub in your
            neighborhood
          </p>

          {status === "success" ? (
            <div className="bg-primary-100 text-primary-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">
                You&apos;re on the list!
              </h3>
              <p>We&apos;ll notify you as soon as RentKub launches in your area.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, ever. We&apos;ll only email you about RentKub updates.
              </p>
            </form>
          )}

          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Have items to share?</p>
            <a
              href="#signup"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Become a founding lender
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
