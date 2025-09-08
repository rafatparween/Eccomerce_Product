"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RefundPolicyPage() {
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

    // Policy cards animation
    gsap.utils.toArray('.policy-card').forEach((card, i) => {
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
        <title>Refund & Return Policy | Hewlett Printers Solution</title>
        <meta name="description" content="Our refund and return policy for refurbished printers. Understand our terms for returns, exchanges, and refunds." />
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
                Refund & Return Policy
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Clear guidelines for returns and refunds of our refurbished printers
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Key Policy Points */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border-l-4 border-cyan-400 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Policy Highlights
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Returns accepted within 7 days of delivery if the printer is DOA (dead on arrival) or not as described</li>
                <li>Return must include all original packaging and accessories</li>
                <li>Setup/help charges are non-refundable</li>
                <li>Refunds processed within 5–7 business days of approved return</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Return Process Card */}
              <motion.div 
                className="policy-card bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-gray-900 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Return Process</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Contact us within 7 days to initiate return</li>
                  <li>Provide order number and reason for return</li>
                  <li>We'll email you a return authorization and shipping label</li>
                  <li>Pack the printer securely with all original items</li>
                  <li>Ship within 3 days of receiving return authorization</li>
                </ul>
              </motion.div>

              {/* Refund Details Card */}
              <motion.div 
                className="policy-card bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-400 text-gray-900 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Refund Details</h3>
                </div>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Full refund for DOA or not-as-described items</li>
                  <li>15% restocking fee for other returns</li>
                  <li>Original shipping costs non-refundable</li>
                  <li>Refund issued to original payment method</li>
                  <li>Processing takes 5-7 business days after we receive return</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Full Policy Details */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Complete Refund & Return Policy
              </span>
            </h2>

            <div className="space-y-8">
              {/* Eligibility */}
              <div className="policy-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-blue-500 text-white p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Return Eligibility
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-300 mb-3">We accept returns under these conditions:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong>Dead on Arrival (DOA):</strong> Printer doesn't power on or has major functional defects</li>
                    <li><strong>Not as Described:</strong> Significant difference from product listing</li>
                    <li><strong>Wrong Item Shipped:</strong> You received a different model than ordered</li>
                  </ul>
                  <p className="text-gray-300 mt-4 italic">
                    Note: Minor cosmetic wear is expected on refurbished items and doesn't qualify for return.
                  </p>
                </div>
              </div>

              {/* Non-Returnable Items */}
              <div className="policy-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-red-500 text-white p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Non-Returnable Items
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-red-500">
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Printers with physical damage caused by the customer</li>
                    <li>Items missing original packaging or accessories</li>
                    <li>Products purchased more than 7 days ago</li>
                    <li>Optional setup/help services (once rendered)</li>
                    <li>Ink/toner cartridges (unless defective)</li>
                  </ul>
                </div>
              </div>

              {/* Warranty Information */}
              <div className="policy-card">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-green-500 text-white p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Warranty Coverage
                </h3>
                <div className="bg-gray-800/30 p-5 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-300 mb-3">All refurbished printers include a 12-month limited warranty covering:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Functional defects in materials or workmanship</li>
                    <li>Normal use failures</li>
                    <li>Manufacturer defects that weren't apparent at time of sale</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    <strong>Warranty Exclusions:</strong> Physical damage, misuse, unauthorized repairs, consumables (ink/toner), and cosmetic issues.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-white mb-4">Need Help With a Return?</h3>
                <p className="text-gray-300 mb-4">
                  Contact our support team for assistance with returns or warranty claims:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone Support</p>
                      <p className="text-white">1-800-HH-SOLUTIONS</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-cyan-500 text-white p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Support</p>
                      <p className="text-white">returns@hewletthub.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}