"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  useLayoutEffect(() => {
    const elements = gsap.utils.toArray(".animate-element");
    const animations = elements.map((element, i) => {
      return gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && trigger.trigger.classList.contains("animate-element")) {
          trigger.kill();
        }
      });
      animations.forEach(anim => anim.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us | Hewlett Hub Solutions</title>
        <meta name="description" content="Get in touch with Hewlett Hub Solutions for inquiries about our refurbished printers and services." />
      </Head>

      <div className="bg-gray-950 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden pt-20">
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
                Contact Us
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're here to help with all your printer needs
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2 animate-element">
              <motion.div 
                className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    className="bg-green-900/30 border border-green-700 text-green-400 p-4 rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Questions">Product Questions</option>
                        <option value="Order Support">Order Support</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Business Inquiry">Business Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2 animate-element">
              <motion.div 
                className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800 h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone Support</h3>
                      <p className="text-gray-400 mb-2">Available Monday-Friday, 9AM-6PM EST</p>
                      <a href="tel:+18001234567" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium">+1 (800) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-400 mb-2">We typically respond within 24 hours</p>
                      <a href="mailto:support@hewlett-hubsolutions.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium">support@hewlett-hubsolutions.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Our Location</h3>
                      <p className="text-gray-400 mb-2">Visit our showroom by appointment</p>
                      <address className="text-gray-300 not-italic">
                        123 Printer Avenue<br />
                        Tech Park, Suite 456<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-800">
                    <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-gray-300">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-gray-300">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <div className="animate-element mt-16">
            <motion.div 
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-64 md:h-96 bg-gray-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-gray-400 mb-4">123 Printer Avenue, San Francisco, CA 94107</p>
                  <motion.button
                    className="inline-flex items-center px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="animate-element mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "What's your response time for email inquiries?",
                    answer: "We typically respond to all email inquiries within 24 hours during business days. For urgent matters, please call our support line."
                  },
                  {
                    question: "Do you offer onsite repair services?",
                    answer: "Currently, we provide remote support and in-warranty service through shipping. We don't offer onsite repair services at this time."
                  },
                  {
                    question: "Can I visit your location to see products?",
                    answer: "Yes! Our showroom is open by appointment Monday through Friday. Please contact us to schedule a visit."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and business purchase orders for qualified accounts."
                  }
                ].map((faq, i) => (
                  <motion.div 
                    key={i}
                    className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
                    whileHover={{ y: -2 }}
                  >
                    <button className="w-full flex justify-between items-center p-6 text-left">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <svg className="w-6 h-6 text-cyan-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-6 pb-6 text-gray-400">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}