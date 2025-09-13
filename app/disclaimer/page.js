"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DisclaimerPage() {
  const sectionRefs = useRef([]);

  useLayoutEffect(() => {
    // Animation for all sections
    gsap.utils.toArray(".animate-section").forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Disclaimer | Hewlett Printers Solution</title>
        <meta name="description" content="Hewlett Printers Solution Disclaimer - Independent printer and IT solutions provider not affiliated with OEM manufacturers." />
      </Head>

      <div className="bg-gray-950 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden pt-20">
          {/* Animated background elements */}
          <svg 
            className="background-lines absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <line 
                key={i}
                x1={i * 5 + '%'} 
                y1="100%" 
                x2={i * 5 + '%'} 
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
                Disclaimer
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             Important Legal Information
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10 max-w-5xl">
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <div className="bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Important Notice</h2>
              <p className="text-gray-300">
                Hewlett Printers Solution is an independent provider of printers and IT solutions and is not affiliated with any manufacturer.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">1. Manufacturer Affiliation</h2>
            <p className="text-gray-300 mb-6">
              Hewlett Printers Solution is <strong>not affiliated with</strong> or endorsed by HP, Canon, Epson, Brother, or any OEM brand. We are an independent provider of printing equipment and IT solutions.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">2. Product Identification</h2>
            <p className="text-gray-300 mb-6">
              Product and brand names are used strictly for identification and compatibility purposes only. All trademarks, logos, and brand names are the property of their respective owners.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">3. Product Information</h2>
            <p className="text-gray-300 mb-6">
              All printers sold by Hewlett Printers Solution are new unless specifically stated otherwise. We provide setup guidance and IT solutions to ensure optimal performance of your equipment.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">4. Warranty Information</h2>
            <p className="text-gray-300 mb-6">
              Our products come with standard manufacturer warranties. Additional setup guidance and IT solutions are provided as part of our service offerings.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Technical Support</h2>
            <p className="text-gray-300 mb-6">
              Our technical support services focus on setup guidance and IT solutions. We provide support only for products purchased through Hewlett Printers Solution.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              Hewlett Printers Solution shall not be liable for any incidental, consequential, or special damages arising from the use of our products or services beyond what is covered by manufacturer warranties.
            </p>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
              <p className="text-gray-300 mb-2">
                If you have any questions about this disclaimer, please contact us at:
              </p>
              <p className="text-cyan-400">
                Hewlett Printers Solution<br />
                Legal Department<br />
                support@hewlettprintersolution.com<br />
                +1 (800) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}