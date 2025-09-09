"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
        <title>About Us | Hewlett Printers Solution</title>
        <meta name="description" content="Learn about Hewlett Printers Solution - your trusted partner for certified refurbished printers. Our commitment to quality, sustainability, and affordability." />
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
                About Hewlett Hub
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trusted Partner in Refurbished Printing Solutions
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Intro Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
               Hewlett Printers Solution is a customer-first company focused on delivering value through certified refurbished printers. We believe in sustainability and affordability — giving technology a second life and saving customers up to 60% compared to new models.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Each device is carefully restored, tested, and quality-checked by our technicians. Our team includes experienced professionals in IT hardware and logistics, ensuring that every product meets a consistent quality standard.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are not affiliated with HP, Canon, Epson, or any OEM manufacturer. All product names are used for descriptive and compatibility purposes only.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="animate-section mb-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-400 mb-4">
                  Founded in 2015, Hewlett Printers Solution began as a small team of IT enthusiasts who saw an opportunity to reduce electronic waste while making quality printing technology accessible to everyone.
                </p>
                <p className="text-gray-400 mb-4">
                  What started as a passion project in a garage has now grown into a trusted name in refurbished printing solutions, serving thousands of satisfied customers across the country.
                </p>
                <p className="text-gray-400">
                  Our journey has been guided by a simple principle: Technology should be sustainable, affordable, and reliable.
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  className="bg-gray-800 h-80 rounded-xl overflow-hidden border border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src="/aboutpage.jpeg" // ✅ Replace with your actual image path
                      alt="Our Team"
                      width={300}          // ✅ Next.js Image needs width and height or fill
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Refurbishment Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-center text-white mb-3">Thorough Inspection</h3>
                <p className="text-gray-400 text-center">
                  Every printer undergoes a 25-point inspection to identify any issues or worn components.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-center text-white mb-3">Professional Refurbishment</h3>
                <p className="text-gray-400 text-center">
                  Our technicians replace all worn parts with OEM-quality components and thoroughly clean each unit.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-center text-white mb-3">Rigorous Testing</h3>
                <p className="text-gray-400 text-center">
                  Each printer completes 50+ test prints to ensure consistent quality and performance.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="animate-section mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Hewlett Printers Solution?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-3 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                  <p className="text-gray-400">
                    Save up to 60% compared to new printers without compromising on quality or performance.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-3 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
                  <p className="text-gray-400">
                    Reduce e-waste by giving printers a second life - each refurbished printer saves approximately 30kg of CO2 emissions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-3 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Warranty Protection</h3>
                  <p className="text-gray-400">
                    All our printers come with a comprehensive 12-month warranty for your peace of mind.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-3 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Assistance</h3>
                  <p className="text-gray-400">
                    Our team of printing experts is available to help with setup, troubleshooting, and advice.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Leadership Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
                    SJ
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Sarah Johnson</h3>
                  <p className="text-cyan-400 mb-3">CEO & Founder</p>
                  <p className="text-gray-400">
                    With 15+ years in IT hardware, Sarah leads our vision for sustainable technology solutions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
                    MC
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Michael Chen</h3>
                  <p className="text-cyan-400 mb-3">Head of Operations</p>
                  <p className="text-gray-400">
                    Michael ensures our refurbishment processes meet the highest quality standards.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
                    DR
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">David Rodriguez</h3>
                  <p className="text-cyan-400 mb-3">Customer Experience Director</p>
                  <p className="text-gray-400">
                    David and his team are dedicated to making every customer interaction exceptional.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            className="animate-section bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-12 text-center border border-cyan-400/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Hewlett Hub Difference?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Discover our range of certified refurbished printers and join thousands of satisfied customers.
            </p>
            <motion.button
              className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Our Products
            </motion.button>
          </motion.section>
        </div>
      </div>
    </>
  );
}