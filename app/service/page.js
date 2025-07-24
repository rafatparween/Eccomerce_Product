"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
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

    // Feature cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.2)"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | Hewlett Hub Solutions</title>
        <meta name="description" content="Discover comprehensive printer solutions from Hewlett Hub Solutions - refurbished printers, maintenance, supplies, and expert support services." />
      </Head>

      <div className="bg-gray-950 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden pt-20">
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
                Our Services
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive Printing Solutions from Hewlett Hub Solutions
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Our Products Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Products
              </span>
            </h2>
            <p className="text-gray-300 mb-6">
              We offer a variety of refurbished printer models from trusted brands including HP, Canon, Epson, and Brother. Each product listing includes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li><strong>Condition:</strong> Refurbished (Grade A or B)</li>
              <li><strong>Compatibility:</strong> USB/WiFi, OS Support</li>
              <li><strong>Accessories:</strong> Power cord, ink (if applicable)</li>
              <li><strong>Optional setup help</strong> (remote)</li>
            </ul>
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400 mb-6">
              <p className="text-gray-300 italic">
                Note: We are an independent seller and are not affiliated with any manufacturer. All product names are used for compatibility reference only.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Product Categories:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Inkjet Printers', 'Laser Printers', 'Wireless Printers', 'Multifunction Printers', 'Bulk Purchase for Offices'].map((category, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{category}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center my-12">
            <div className="flex-grow border-t border-gray-700"></div>
            <div className="px-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Support Services Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Optional Support Services
              </span>
            </h2>
            <div className="flex items-start mb-6">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Installation & Setup Assistance (Optional Add-on)</h3>
                <p className="text-gray-300 mb-4">
                  Need help getting started? We offer optional remote support for:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                  <li>Printer installation</li>
                  <li>Driver setup</li>
                  <li>Connectivity issues (WiFi/USB)</li>
                  <li>Basic usage guidance</li>
                </ul>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-gray-300">
                    <span className="font-semibold">Note:</span> This service is provided on request only and is billed separately. Our support does not cover hardware repair or brand-authorized service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Existing Services Content... */}
          {/* (Keep all your existing services sections below this point) */}

        </div>
      </div>
    </>
  );
}