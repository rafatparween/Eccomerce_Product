"use client"
import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const particlesRef = useRef([])
  const featuresRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  // Particle system animation
  useLayoutEffect(() => {
    const particles = []
    const colors = ['rgba(56, 182, 255, 0.5)', 'rgba(16, 185, 129, 0.5)', 'rgba(139, 92, 246, 0.5)']
    
    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full pointer-events-none'
      particle.style.width = `${Math.random() * 10 + 5}px`
      particle.style.height = particle.style.width
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      particle.style.opacity = Math.random() * 0.3 + 0.1
      heroRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5
      })
    })

    particlesRef.current = particles

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  // Hero text animation with persistent final state
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })
    .from(subtitleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.6")
    .from(ctaRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, "-=0.5")

    // Ensure elements stay visible after animation
    tl.set([titleRef.current, subtitleRef.current, ctaRef.current], { 
      clearProps: "all" 
    })

    return () => tl.kill()
  }, [])

  // Feature cards animation
  useLayoutEffect(() => {
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
        delay: i * 0.1
      })
    })

    // Background lines animation
    gsap.to('.background-lines line', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      },
      attr: { y2: -500 },
      stagger: 0.1,
      ease: 'none'
    })

    // Timeline animation
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })

    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
      timelineRef.current.from(item, {
        opacity: 0,
        y: 100,
        duration: 0.5
      }, i * 0.2)
    })

    // Parallax effect for hero content
    gsap.to(".hero-content", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      opacity: 0,
      ease: "none"
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      if (timelineRef.current) timelineRef.current.kill()
    }
  }, [])

  useLayoutEffect(() => {
    // Initialize timeline animation
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false // Set to true for debugging if needed
      }
    })

    // Animate each timeline item
    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
      })
    })

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hewlett Hub Solutions</span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="/service" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="/printer-solution" className="text-gray-300 hover:text-white transition-colors">Printer Solutions</a>
            <a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
             <a href="/contacts" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="/login" className="hidden md:inline-block px-4 py-2 text-gray-300 hover:text-white transition-colors">Login</a>
            <Link href="/contacts" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
    Contact Us
  </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
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

        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/70 to-gray-950/90"></div>
        
        <div className="container mx-auto px-6 relative z-10 hero-content">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Affordable Refurbished Printers
              </span>
              <br />
              <span className="text-white">For Home & Office Use</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              Professionally restored printers from top brands — tested, certified, and ready to perform.
            </p>
            
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Video
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-14 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-gray-200 rounded-full mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Logo Cloud Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-950 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {['HP', 'Canon', 'Epson', 'Brother', 'Xerox', 'Lexmark', 'Samsung'].map((brand, i) => (
              <motion.div
                key={brand}
                className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: [1, 1.1, 1.05] }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  About Hewlett Hub Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Welcome to Hewlett Hub Solutions — your trusted source for high-quality refurbished printers and printing accessories. We specialize in sourcing, refurbishing, and reselling reliable pre-owned printers that offer the same functionality as new models at a fraction of the price.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-300">Thoroughly inspected and tested by certified technicians</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-300">Professionally cleaned and refurbished to like-new condition</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-300">Backed by our limited replacement warranty for peace of mind</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-300">Ready for plug-and-play use with all necessary accessories included</p>
                </div>
              </div>
              <p className="text-xl text-gray-300">
                Whether you're setting up a home office or managing a small business, we help you save big without compromising on quality. Our mission is to provide affordable printing solutions while reducing electronic waste.
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45" 
                  alt="Refurbished printers" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Refurbishment Center</h3>
                  <p className="text-gray-300">State-of-the-art facility with certified technicians</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "90%", label: "Cost savings compared to new printers" },
              { value: "1 Year", label: "Warranty on all refurbished printers" },
              { value: "24/7", label: "Technical support available" },
              { value: "500+", label: "Printers refurbished monthly" },
              { value: "98%", label: "Customer satisfaction rate" },
              { value: "50%", label: "Reduction in e-waste contribution" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 bg-gray-900 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                  {stat.value}
                </h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Printer Types Section */}
      <section className="py-28 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Printer Selection
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Choose from our wide range of professionally refurbished printers for every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Laser Printers",
                description: "High-speed, economical printing perfect for office environments. Toner-based technology delivers sharp text at low cost per page.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                color: "from-blue-500 to-cyan-400"
              },
              {
                title: "Inkjet Printers",
                description: "Vibrant color printing ideal for photos and creative projects. Compact designs perfect for home offices.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Multifunction Printers",
                description: "All-in-one devices that print, scan, copy and fax. Save space and money with these versatile workhorses.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                color: "from-amber-500 to-yellow-400"
              },
              {
                title: "Photo Printers",
                description: "Professional-grade photo printing with exceptional color accuracy and archival-quality inks.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: "from-pink-500 to-rose-400"
              },
              {
                title: "Large Format Printers",
                description: "For architects, engineers and designers needing wide-format printing up to A0 size.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                ),
                color: "from-emerald-500 to-teal-400"
              },
              {
                title: "Label Printers",
                description: "Specialized printers for creating professional barcode labels, shipping labels and more.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                color: "from-indigo-500 to-blue-400"
              }
            ].map((type, i) => (
              <motion.div
                key={i}
                className="feature-card bg-gray-900 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800"
                whileHover={{ y: -10 }}
              >
                <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${type.color}`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-400">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section ref={featuresRef} className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Why Choose Our
              </span>
              <br />
              Refurbished Printers?
            </h2>
            <p className="text-xl text-gray-400">
              We provide high-quality refurbished printers that perform like new at a fraction of the cost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Certified Quality",
                description: "All printers undergo rigorous testing and certification processes to ensure they meet our high standards.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Warranty Included",
                description: "Every printer comes with a comprehensive 1-year replacement warranty for your peace of mind.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "All Major Brands",
                description: "HP, Canon, Epson, Brother, Xerox and more available from our extensive inventory.",
                color: "from-emerald-500 to-teal-400"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "Free Setup Support",
                description: "Our expert technicians will help you set up your printer remotely at no additional cost.",
                color: "from-amber-500 to-yellow-400"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                ),
                title: "Eco-Friendly",
                description: "Reduce e-waste and your carbon footprint by giving printers a second life.",
                color: "from-red-500 to-pink-400"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Office-Ready",
                description: "Perfect for home offices, small businesses, and enterprise environments alike.",
                color: "from-indigo-500 to-blue-400"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card bg-gray-900 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800"
                whileHover={{ y: -10 }}
              >
                <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Printer Comparison Section */}
      <section className="py-28 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                New vs Refurbished
              </span>
              <br />
              The Smart Choice
            </h2>
            <p className="text-xl text-gray-400">
              See how our refurbished printers compare to buying new
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">New Printers</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-300">High upfront cost (2-3x more expensive)</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-300">Limited warranty (typically 1 year)</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-300">Higher environmental impact</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-300">May include unnecessary features</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gray-800/50">
                <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Our Refurbished Printers</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">Significant cost savings (up to 70% off)</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">1-year replacement warranty included</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">Eco-friendly - reduces e-waste</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">Tested and optimized for reliability</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">Free setup support included</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <p className="text-gray-300">Same functionality as new printers</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <p className="text-gray-300">Professional-grade performance</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <p className="text-gray-300">Compatible with all standard supplies</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <p className="text-gray-300">Plug-and-play ready</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <p className="text-gray-300">Accessories included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={sectionRef}
        className="timeline-section py-28 bg-gray-900/50"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 10-Point Refurbishment Process
            </h2>
            <p className="text-xl text-gray-400">
              Every printer goes through our rigorous inspection and refurbishment process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Initial Diagnostic",
                description: "Comprehensive testing of all printer functions and components",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Complete Disassembly",
                description: "Printer is fully disassembled to access all internal components",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Deep Cleaning",
                description: "All components professionally cleaned using specialized equipment",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )
              },
              {
                title: "Component Inspection",
                description: "Each part inspected for wear and tested for functionality",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: "Part Replacement",
                description: "Worn or damaged components replaced with OEM or high-quality alternatives",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              {
                title: "Reassembly",
                description: "Printer reassembled with care using proper techniques",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Firmware Update",
                description: "Latest firmware installed for optimal performance and security",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Print Quality Test",
                description: "500+ page test run to ensure consistent print quality",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                )
              },
              {
                title: "Final Inspection",
                description: "Complete quality control check by senior technician",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Packaging",
                description: "Printer carefully packaged with all necessary accessories",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              }
            ].map((step, i) => (
              <div 
                key={i}
                className="timeline-item relative pl-16 pb-10 last:pb-0 group opacity-100"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-700 group-last:hidden"></div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The refurbished HP printer I bought works perfectly and saved me hundreds compared to a new one. Couldn't be happier with the quality and service!",
                author: "Sarah Johnson",
                role: "Small Business Owner",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "As an IT manager, I've outfitted our entire office with refurbished printers from Hewlett Hub Solutions. The quality is exceptional and we've saved thousands.",
                author: "Michael Chen",
                role: "IT Manager",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The setup support was incredible - they walked me through everything remotely. My printer works like new and arrived faster than expected!",
                author: "David Wilson",
                role: "Home Office User",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg"
              },
              {
                quote: "I was skeptical at first, but the printer arrived in perfect condition and works flawlessly. Will definitely buy refurbished again!",
                author: "Emily Rodriguez",
                role: "Graphic Designer",
                avatar: "https://randomuser.me/api/portraits/women/63.jpg"
              },
              {
                quote: "Our school needed affordable printers for the computer lab. These refurbished units have been running daily for 8 months without a single issue.",
                author: "Robert Thompson",
                role: "School Administrator",
                avatar: "https://randomuser.me/api/portraits/men/41.jpg"
              },
              {
                quote: "The warranty gave me peace of mind, but I haven't needed it. The printer has been working perfectly since day one. Great value!",
                author: "Jennifer Lee",
                role: "Freelance Writer",
                avatar: "https://randomuser.me/api/portraits/women/28.jpg"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our refurbished printers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What exactly is a refurbished printer?",
                answer: "A refurbished printer is a pre-owned device that has been professionally inspected, repaired if necessary, thoroughly cleaned, and tested to ensure it meets original manufacturer specifications. Our refurbishment process goes beyond basic testing to ensure each printer performs like new."
              },
              {
                question: "How much can I save with a refurbished printer?",
                answer: "Typically, our customers save between 50-70% compared to the cost of a brand new printer with similar specifications. The exact savings depend on the model and its original retail price, but the value is significant across our entire inventory."
              },
              {
                question: "What's included with my refurbished printer?",
                answer: "Each printer comes with all necessary accessories (power cable, USB cable if applicable, installation CD/manual), and may include starter ink or toner cartridges depending on the model. We clearly list what's included with each product on its description page."
              },
              {
                question: "How long is the warranty period?",
                answer: "All our refurbished printers come with a comprehensive 1-year replacement warranty. This covers any defects in materials or workmanship, and if any issues arise, we'll replace your printer at no additional cost."
              },
              {
                question: "Can I use regular ink/toner cartridges?",
                answer: "Yes, our refurbished printers are compatible with all standard OEM or third-party ink and toner cartridges designed for that specific model. We recommend using high-quality supplies for optimal performance."
              },
              {
                question: "How do I know the printer's condition?",
                answer: "We grade each printer's condition (Excellent, Very Good, Good) based on cosmetic appearance and provide detailed photos. All printers function perfectly regardless of cosmetic grade, which only affects external appearance."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="mb-6 bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <button className="w-full flex justify-between items-center p-6 text-left">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6 text-gray-400">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to save on your next printer?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Browse our selection of high-quality refurbished printers and save up to 70% off retail prices.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                Shop Printers
              </button>
              <button className="px-8 py-4 border border-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hewlett Hub Solutions</span>
              </div>
              <p className="text-gray-400">Your trusted source for affordable, high-quality refurbished printers.</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Laser Printers</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Inkjet Printers</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Multifunction Printers</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Photo Printers</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Label Printers</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Printer Supplies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Setup Guides</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Warranty Info</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Driver Downloads</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Troubleshooting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/service" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="contacts" className="text-gray-400 hover:text-white transition-colors"> Contact Us</a></li>
                 
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors"> Blog</a></li>
                <li><a href="/printer-solution" className="text-gray-400 hover:text-white transition-colors">Printer Solutions</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors"> Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2023 Hewlett Hub Solutions. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a>
              <a href="/refund" className="text-gray-400 hover:text-white transition-colors text-sm">Refund & Return Policy</a>
              <a href="/cookie" className="text-gray-400 hover:text-white transition-colors text-sm"> Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}