"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CookiePolicyPage() {
  const sectionRefs = useRef([]);

  useLayoutEffect(() => {
    // Animate sections
    gsap.utils.toArray(".animate-section").forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });

    // Animate cookie cards
    gsap.utils.toArray(".cookie-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.2)",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cookie Policy | Hewlett Printers Solution</title>
        <meta
          name="description"
          content="Our cookie policy explains how we use cookies to enhance your experience on Hewlett Printers Solution website."
        />
      </Head>

      <div className="bg-gray-950 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden pt-20">
          {/* Animated background lines */}
          <svg
            className="background-lines absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={i}
                x1={`${i * 5}%`}
                y1="100%"
                x2={`${i * 5}%`}
                y2="100%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
            ))}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Cookie Policy
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How we use cookies to enhance your browsing experience
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Key Policy Summary */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Cookie Usage Summary
              </h2>
              <p className="text-gray-300">
                We use cookies to enhance your website experience, track visits, and analyze site
                traffic via tools like Google Analytics. You may disable cookies through your
                browser at any time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Essential Cookies */}
              <motion.div
                className="cookie-card bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-400 text-gray-900 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Essential Cookies</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Required for core website functionality</li>
                  <li>Enable secure login and shopping cart</li>
                  <li>Remember your preferences</li>
                  <li>Cannot be disabled without affecting site operation</li>
                </ul>
              </motion.div>

              {/* Analytics Cookies */}
              <motion.div
                className="cookie-card bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-400 text-gray-900 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Analytics Cookies</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Help us understand visitor behavior</li>
                  <li>Track which pages are most popular</li>
                  <li>Identify technical issues</li>
                  <li>Improve user experience over time</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Full Policy Details */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Complete Cookie Policy
              </span>
            </h2>

            <div className="space-y-8">
              {/* What Are Cookies */}
              <div className="cookie-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-cyan-500 text-white p-1 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  What Are Cookies?
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-cyan-500">
                  <p className="text-gray-300">
                    Cookies are small text files stored on your device when you visit websites.
                    They help websites remember information about your visit, which can make it
                    easier to visit the site again and make the site more useful to you.
                  </p>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div className="cookie-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-blue-500 text-white p-1 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </span>
                  How We Use Cookies
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-blue-500">
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>
                      <strong>Authentication:</strong> Recognize you when you log in
                    </li>
                    <li>
                      <strong>Preferences:</strong> Remember your settings and preferences
                    </li>
                    <li>
                      <strong>Security:</strong> Protect against malicious activities
                    </li>
                    <li>
                      <strong>Analytics:</strong> Understand how visitors use our site
                    </li>
                    <li>
                      <strong>Performance:</strong> Optimize website speed and delivery
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="cookie-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-purple-500 text-white p-1 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Third-Party Cookies
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-300 mb-3">We use these third-party services that may set cookies:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                    <li><strong>Hotjar:</strong> User behavior analytics</li>
                    <li><strong>Facebook Pixel:</strong> Advertising effectiveness</li>
                    <li><strong>LinkedIn Insight Tag:</strong> Professional audience insights</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    These third parties have their own privacy policies. We recommend reviewing them for more information.
                  </p>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="cookie-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-green-500 text-white p-1 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Managing Cookies
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-300 mb-3">You can control and/or delete cookies as you wish:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Delete all cookies from your browser settings</li>
                    <li>Set your browser to prevent cookies being placed</li>
                    <li>Use privacy-focused browser extensions</li>
                    <li>Opt-out of specific third-party cookies through their websites</li>
                  </ul>
                  <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Browser Guides:</h4>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>
                        <a
                          href="https://support.google.com/chrome/answer/95647?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline hover:text-blue-300"
                        >
                          Chrome
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline hover:text-blue-300"
                        >
                          Firefox
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline hover:text-blue-300"
                        >
                          Safari
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline hover:text-blue-300"
                        >
                          Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mt-12 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
