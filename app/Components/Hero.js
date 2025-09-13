
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
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hewlett Printers Solution</span>
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
                 Premium Printers & IT Solutions
              </span>
              <br />
              <span className="text-white">For Home & Office Use</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              New printers from top brands — tested, certified, and ready to perform.
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
                  About Hewlett Printers Solution
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Welcome to Hewlett Printers Solution — your trusted source for high-quality printers and printing accessories. We specialize in providing reliable printers that offer excellent functionality at competitive prices.
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
        { value: "99.9%", label: "Network uptime and reliability" },
        { value: "500+", label: "Devices configured monthly" },
        { value: "100%", label: "Secure setup and installation" },
        { value: "98%", label: "Customer satisfaction rate" },
        { value: "300+", label: "Businesses supported with IT solutions" },
        { value: "200+", label: "New printers and accessories delivered monthly" }
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
          Explore Our Latest Printer Range
        </span>
      </h2>
      <p className="text-xl text-gray-400">
        Discover brand new printers, must-have accessories, expert setup guidance, 
        and reliable IT solutions designed to power your home and business.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Laser Printers",
          description: "Fast, sharp, and cost-effective printing for offices. Perfect for high-volume work with professional results.",
          color: "from-blue-500 to-cyan-400",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7h6v10H9z" />
            </svg>
          )
        },
        {
          title: "Inkjet Printers",
          description: "Brilliant color printing for photos, projects, and creative needs. Compact and ideal for home setups.",
          color: "from-purple-500 to-pink-500",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15a1.65 1.65 0 010 3.3H4.6a1.65 1.65 0 010-3.3" />
            </svg>
          )
        },
        {
          title: "Multifunction Printers",
          description: "All-in-one solutions for print, scan, copy, and fax — complete convenience in a single device.",
          color: "from-amber-500 to-yellow-400",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="8" rx="2" ry="2" />
              <rect x="6" y="14" width="12" height="6" rx="2" ry="2" />
            </svg>
          )
        },
        {
          title: "Printer Accessories",
          description: "Essential add-ons like toners, cartridges, cables, and trays to keep your printers running smoothly.",
          color: "from-green-500 to-teal-400",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
            </svg>
          )
        },
        {
          title: "Setup Guidance",
          description: "Step-by-step setup support for new printers — get started quickly without any technical hassle.",
          color: "from-indigo-500 to-blue-400",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4h9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18" />
            </svg>
          )
        },
        {
          title: "IT Solutions",
          description: "Customized IT support for networking, device integration, and seamless printing workflows.",
          color: "from-pink-500 to-rose-400",
          icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
          )
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
        Brand New Printers & Solutions?
      </h2>
      <p className="text-xl text-gray-400">
        We provide the latest printers, essential accessories, expert setup guidance, 
        and reliable IT solutions to keep your work running smoothly.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 15h16M10 3v18" />
            </svg>
          ),
          title: "Latest Printer Models",
          description: "Choose from a wide range of brand new printers built for speed, efficiency, and professional quality.",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
          ),
          title: "IT Integration",
          description: "Seamless IT solutions for connecting your printers with networks, devices, and cloud platforms.",
          color: "from-blue-500 to-cyan-400"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          ),
          title: "Accessories & Add-ons",
          description: "From cartridges to cables and trays, find all the essential accessories to keep your printers running.",
          color: "from-emerald-500 to-teal-400"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3v18" />
            </svg>
          ),
          title: "Easy Setup Guidance",
          description: "Our experts provide step-by-step setup support so you can start using your new printer hassle-free.",
          color: "from-amber-500 to-yellow-400"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5h6m-6 4h6m-6 4h6m-6 4h6" />
            </svg>
          ),
          title: "Trusted Brands",
          description: "We offer top models from HP, Canon, Epson, and Brother — trusted by businesses worldwide.",
          color: "from-red-500 to-pink-400"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 9h16" />
            </svg>
          ),
          title: "Office-Ready Solutions",
          description: "Perfect for home, small businesses, and enterprise environments — reliable and efficient.",
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
          Modern Printers &
        </span>
        <br />
        Complete Solutions
      </h2>
      <p className="text-xl text-gray-400">
        Explore everything you need — the latest high-performance printers, essential accessories, expert setup guidance, and IT solutions designed to make your workflow seamless and efficient.
      </p>
    </motion.div>

    <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
        
        {/* Column 1 */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">New Printers</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✔</span>
              <p className="text-gray-300">High-speed printing with sharp quality</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✔</span>
              <p className="text-gray-300">Energy-efficient & eco-friendly designs</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✔</span>
              <p className="text-gray-300">Wireless & cloud printing support</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✔</span>
              <p className="text-gray-300">Advanced security features for offices</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✔</span>
              <p className="text-gray-300">Compact models perfect for home & business use</p>
            </div>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="p-8 bg-gray-800/50">
          <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Accessories & Setup</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-cyan-300 text-xl mr-3">⚡</span>
              <p className="text-gray-300">Essential add-ons: ink, toner, trays, cables</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-300 text-xl mr-3">⚡</span>
              <p className="text-gray-300">Seamless setup & installation support</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-300 text-xl mr-3">⚡</span>
              <p className="text-gray-300">Network & Wi-Fi configuration help</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-300 text-xl mr-3">⚡</span>
              <p className="text-gray-300">Quick troubleshooting guidance</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-300 text-xl mr-3">⚡</span>
              <p className="text-gray-300">Upgrades and compatibility checks for smooth use</p>
            </div>
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">IT Solutions</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3">💻</span>
              <p className="text-gray-300">Integration with office systems</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3">💻</span>
              <p className="text-gray-300">Cloud & remote printing enabled</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3">💻</span>
              <p className="text-gray-300">Data security & user access controls</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3">💻</span>
              <p className="text-gray-300">Ongoing updates & performance checks</p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3">💻</span>
              <p className="text-gray-300">Custom IT support packages for businesses</p>
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
      {/* 🔹 Updated Heading & Subheading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Smart Printing Made Simple
      </h2>
      <p className="text-xl text-gray-400">
        Experience hassle-free printing with modern devices, tailored accessories, 
        and step-by-step setup support.
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      {[
        {
          title: "Printer Selection",
          description: "Choose from the latest models designed for home, office, and enterprise use.",
        },
        {
          title: "Accessories",
          description: "Cartridges, cables, paper trays, and more — all matched to your printer needs.",
        },
        {
          title: "Setup Guidance",
          description: "Step-by-step installation and configuration support to get you started quickly.",
        },
        {
          title: "Network Integration",
          description: "Wireless and wired network connectivity solutions for seamless office use.",
        },
        {
          title: "Software & Drivers",
          description: "We ensure the latest drivers and tools are installed for maximum performance.",
        },
        {
          title: "Performance Testing",
          description: "Each printer is tested for print speed, sharpness, and consistency.",
        },
        {
          title: "IT Solutions",
          description: "Custom IT support that ensures your printing setup runs securely and reliably.",
        },
        {
          title: "Ongoing Guidance",
          description: "We’re here whenever you need help — setup advice, troubleshooting, and more.",
        }
      ].map((step, i) => (
        <div 
          key={i}
          className="timeline-item relative pl-16 pb-10 last:pb-0 group opacity-100"
        >
          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            {/* Just icons placeholder */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-700 group-last:hidden"></div>
          <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
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
      {/* 🔹 Updated heading + subtext */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Trusted by Professionals & Everyday Users
      </h2>
      <p className="text-xl text-gray-400">
        Real experiences from people who rely on our printers, accessories, and IT support.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          quote: "The new HP printer I ordered was easy to set up with their guidance. Prints are crisp and fast — exactly what my small business needed!",
          author: "Sarah Johnson",
          role: "Small Business Owner",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          quote: "Our entire office now runs smoothly thanks to their IT solutions and accessories. We saved time and improved efficiency instantly.",
          author: "Michael Chen",
          role: "IT Manager",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          quote: "The setup support was fantastic. They made connecting my wireless printer super simple. Works flawlessly for my home office.",
          author: "David Wilson",
          role: "Home Office User",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
          quote: "I design a lot, and their printers give me sharp, vibrant prints every time. The extra paper tray accessory was a lifesaver for bulk work.",
          author: "Emily Rodriguez",
          role: "Graphic Designer",
          avatar: "https://randomuser.me/api/portraits/women/63.jpg"
        },
        {
          quote: "Our school’s computer lab needed reliable printers. Their affordable solutions and network setup have been running perfectly for months.",
          author: "Robert Thompson",
          role: "School Administrator",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
          quote: "Great value and reliable performance. With the setup guidance and accessories included, I was up and running in minutes!",
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
        All you need to know about our new printers, accessories, and setup guidance
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      {[
        {
          question: "What types of printers do you offer?",
          answer: "We provide a wide range of new printers suitable for home, office, and enterprise use, including laser, inkjet, and multifunction models. Each printer comes with the latest features for seamless printing."
        },
        {
          question: "What accessories are included?",
          answer: "All printers come with essential accessories like power cables, USB cables (if applicable), and installation guides. Some models also include starter ink or toner cartridges."
        },
        {
          question: "Do you provide setup guidance?",
          answer: "Yes! Our team provides step-by-step setup guidance to ensure your printer is installed and ready to use quickly, whether for personal or professional use."
        },
        {
          question: "Can I connect my printer to a network?",
          answer: "Absolutely. All compatible models support both wired and wireless network connections, allowing multiple users to print seamlessly across your office or home setup."
        },
        {
          question: "Are your printers compatible with all cartridges?",
          answer: "Yes, our printers work with standard OEM or third-party cartridges designed for each model. We recommend high-quality cartridges for optimal performance and longevity."
        },
        {
          question: "Do you offer IT support for printer setup?",
          answer: "Yes, we provide IT support for network configuration, driver installation, and troubleshooting, ensuring your printing setup runs smoothly and securely."
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
              Browse our selection of high-quality printers at competitive prices.
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
                <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hewlett Printers Solution</span>
              </div>
              <p className="text-gray-400">3550 GILA BND CASPER, WY 82604</p>
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
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Setup Guides</a></li>
  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Warranty Info</a></li>
  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
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
            <p className="text-gray-400 mb-4 md:mb-0">© 2023 Hewlett Printers Solution. All rights reserved.</p>
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