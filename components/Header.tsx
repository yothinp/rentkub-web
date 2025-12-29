"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">RentKub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#categories"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Categories
            </a>
            <a
              href="#impact"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Impact
            </a>
            <a href="#signup" className="btn-primary text-sm py-2 px-6">
              Get Early Access
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-primary-600"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-primary-600"
              >
                Features
              </a>
              <a
                href="#categories"
                className="text-gray-600 hover:text-primary-600"
              >
                Categories
              </a>
              <a
                href="#impact"
                className="text-gray-600 hover:text-primary-600"
              >
                Impact
              </a>
              <a href="#signup" className="btn-primary text-center text-sm">
                Get Early Access
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
