"use client"

import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrinterSolutions() {
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

    // Service cards animation
    gsap.utils.toArray('.solution-card').forEach((card, i) => {
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
        <title>Printer Solutions | Hewlett Printers Solution</title>
        <meta name="description" content="Comprehensive printer solutions from Hewlett Printers Solution - refurbished printers, maintenance, supplies, and expert Assistance services." />
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
                Printer Solutions
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Complete printing ecosystem solutions from Hewlett Printers Solution
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Products Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Printer Products
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Inkjet Printers",
                  description: "High-quality color printing for home and small office use",
                  icon: "🖨️",
                  features: ["Affordable printing", "Vibrant color output", "Compact designs"]
                },
                {
                  title: "Laser Printers",
                  description: "Fast, economical printing for office environments",
                  icon: "⚡",
                  features: ["High-volume printing", "Low cost per page", "Sharp text quality"]
                },
                {
                  title: "Multifunction Printers",
                  description: "All-in-one printing, scanning, copying and faxing",
                  icon: "🔄",
                  features: ["Space-saving", "Network ready", "Automatic document feeder"]
                },
                {
                  title: "Wireless Printers",
                  description: "Print from any device without cables",
                  icon: "📶",
                  features: ["Wi-Fi Direct", "Mobile printing", "Cloud connectivity"]
                },
                {
                  title: "Photo Printers",
                  description: "Professional-grade photo printing",
                  icon: "🖼️",
                  features: ["6-color ink systems", "Borderless printing", "Archival quality"]
                },
                {
                  title: "Enterprise Printers",
                  description: "High-volume solutions for businesses",
                  icon: "🏢",
                  features: ["Fast print speeds", "High-capacity trays", "Advanced security"]
                }
              ].map((product, i) => (
                <motion.div 
                  key={i}
                  className="solution-card bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-300">
                <span className="font-semibold">Note:</span> All printers are professionally refurbished and tested. We offer printers from top brands including HP, Canon, Epson, and Brother. We are not affiliated with these manufacturers.
              </p>
            </div>
          </section>

          {/* Support Services Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
               Assistance Services
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Remote Setup Assistance",
                  description: "Our technicians will help you get your printer installed and configured",
                  icon: "🖥️",
                  details: [
                    "Driver installation",
                    "Network/Wi-Fi setup",
                    "Basic troubleshooting"
                  ]
                },
                {
                  title: "Maintenance Plans",
                  description: "Keep your printer running smoothly with regular maintenance",
                  icon: "🔧",
                  details: [
                    "Print head cleaning",
                    "Firmware updates",
                    "Performance optimization"
                  ]
                },
                {
                  title: "Ink & Toner Subscriptions",
                  description: "Never run out of supplies with our automatic delivery service",
                  icon: "🖨️",
                  details: [
                    "Genuine compatible supplies",
                    "Usage-based scheduling",
                    "10% discount on subscriptions"
                  ]
                },
                {
                  title: "Bulk Purchasing",
                  description: "Custom solutions for businesses and organizations",
                  icon: "📦",
                  details: [
                    "Volume discounts",
                    "Standardized fleet setup",
                    "Dedicated account manager"
                  ]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  className="solution-card bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start">
                        <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Why Choose Hewlett Printers Solution?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Assurance",
                  description: "Every printer undergoes rigorous testing and refurbishment",
                  icon: "🔍"
                },
                {
                  title: "Cost Savings",
                  description: "Save 40-70% compared to new printers",
                  icon: "💰"
                },
                {
                  title: "Warranty Protection",
                  description: "1-year warranty on all refurbished printers",
                  icon: "🛡️"
                },
                {
                  title: "Eco-Friendly",
                  description: "Reduce e-waste with refurbished equipment",
                  icon: "🌱"
                },
                {
                  title: "Expert Assistance",
                  description: "Knowledgeable technicians available to help",
                  icon: "👨‍💻"
                },
                {
                  title: "Flexible Solutions",
                  description: "Custom configurations for your specific needs",
                  icon: "⚙️"
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  className="solution-card bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Printing Solution?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact our printing experts to find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Printers
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}