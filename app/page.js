"use client";

import { Navbar } from "@/components/layout/navbar";
import React, { useState } from "react";
import { playfair } from "./layout";
import { HeroSection } from "@/components/hero-section";
import { CurvedLine } from "@/components/ui/curved-line";
import { EyeIndicator } from "@/components/ui/eye-indicator";
import { Storysection } from "@/components/layout/story";

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleConnectWithUs = () => {
    // Option 1: Open contact modal
    setIsContactModalOpen(true);

    // Option 2: Scroll to contact section (alternative)
    // handleSmoothScroll("#contact");

    // Option 3: Open email client (alternative)
    // window.location.href = "mailto:contact@eyecon-ai.com?subject=Connect With Us";
  };

  return (
    <main className="min-h-screen">
      <section className="relative">
        <HeroSection />
        {/* Curved Line Divider - Just below hero */}
        <CurvedLine
          variant={5}
          className="absolute bottom-0 left-0 right-0 z-20"
        />
      </section>

      {/* Why Protect Your Eyes - Story Section */}
      <section className="flex min-h-1/2 items-center justify-center py-20 bg-black/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Story Timeline */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200 mb-8 font-playfair`}
              >
                Why Your Eyes Need
                <span className="text-white/95"> Protection?</span>
              </h2>
            </div>
            <EyeIndicator size="large" />
          </div>
        </div>
        {/* Story Steps */}
      </section>
      <section className="min-h-screen">
        <Storysection />
      </section>
      {/* Smart Eye Protection Features Section */}
      <section
        id="features"
        className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              ✨ AI-Powered Protection
            </div>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${playfair.className}`}
            >
              Smart Eye Protection
              <span className="text-blue-600"> Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced AI technology that adapts to your work habits and
              protects your vision in real-time
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Eye Tracking */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real-time Eye Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced computer vision monitors your eye movements and gaze
                patterns to provide personalized insights and protection.
              </p>
            </div>

            {/* Fatigue Detection */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI Fatigue Detection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning algorithms analyze your blink patterns and eye
                strain indicators to detect fatigue before you feel it.
              </p>
            </div>

            {/* Blink Monitoring */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Focus & Blink Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track your focus levels and blink frequency to maintain optimal
                eye health and concentration throughout your day.
              </p>
            </div>

            {/* Smart Break Reminders */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Break Reminders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized break notifications based on your work patterns,
                ensuring you rest your eyes at the optimal moments.
              </p>
            </div>

            {/* Screen Optimization */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Adaptive Screen Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically adjusts screen brightness, contrast, and blue
                light levels based on ambient lighting and time of day.
              </p>
            </div>

            {/* Eye Exercises */}
            <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Guided Eye Exercises
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive eye exercises and vision therapy routines designed
                to strengthen your eyes and improve focus.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span>Try EyeKon AI Now</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
            </button>
          </div>
        </div>
      </section>

      <div
        id="pricing"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
      </div>

      <div
        id="about"
        className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-xl text-gray-600">
            Learn about our mission to protect your vision
          </p>
        </div>
      </div>

      <div
        id="contact"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Connect With Us
              </h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="4"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Thank you! We'll get back to you soon.");
                    setIsContactModalOpen(false);
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
