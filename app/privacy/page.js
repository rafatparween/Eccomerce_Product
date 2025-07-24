import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicy() {
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
        <title>Privacy Policy | Hewlett Hub Solutions</title>
        <meta name="description" content="Hewlett Hub Solutions Privacy Policy. Learn how we collect, use, and protect your personal information." />
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
                Privacy Policy
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10 max-w-5xl">
          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-6">
              At Hewlett Hub Solutions ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products.
            </p>
            <p className="text-gray-300">
              By accessing or using our service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We may collect personally identifiable information including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Name and contact details (email address, phone number, shipping address)</li>
              <li>Payment information (processed securely via payment gateways)</li>
              <li>Order history and preferences</li>
              <li>Device and usage data (IP address, browser type, pages visited)</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Non-Personal Information</h3>
            <p className="text-gray-300">
              We may collect anonymous, non-identifiable information about how you interact with our website to improve our services.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>To process and fulfill your orders</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To improve our website and product offerings</li>
              <li>To communicate with you about orders, products, and promotions</li>
              <li>To prevent fraud and enhance security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">3. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Payment processors to complete transactions</li>
              <li>Shipping carriers to deliver your orders</li>
              <li>Service providers who assist with our business operations (under confidentiality agreements)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400 mb-3">International Data Transfers</h3>
            <p className="text-gray-300">
              Your information may be transferred to and maintained on computers located outside of your country, where data protection laws may differ.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing (we do not store credit card details)</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="text-gray-300">
              While we strive to protect your information, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us at privacy@hewletthub.com.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Remember your preferences and login information</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Deliver targeted advertisements (through third-party services)</li>
            </ul>
            <p className="text-gray-300">
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">7. Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 mb-16 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">8. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy periodically. The "Last Updated" date at the top indicates when revisions were made.
            </p>
            <p className="text-gray-300">
              We will notify you of significant changes through email or prominent notices on our website.
            </p>
          </section>

          <section className="animate-section bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-cyan-400 mb-2">
              Hewlett Hub Solutions<br />
              Attn: Privacy Officer<br />
              privacy@hewletthub.com<br />
              +1 (800) 123-4567
            </p>
            <p className="text-gray-300">
              For EU residents, you may also lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}