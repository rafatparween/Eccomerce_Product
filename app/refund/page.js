"use client"
import { motion } from 'framer-motion'

export default function TimelineSection() {
  return (
    <section className="timeline-section py-28 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Britive Works
          </h2>
          <p className="text-xl text-gray-400">
            Simple, automated privileged access management for cloud environments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              title: "Connect Your Cloud",
              description: "Integrate with AWS, Azure, GCP, Kubernetes and more in minutes",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2m-2-4h.01M17 16h.01" />
                </svg>
              )
            },
            // ... other timeline items
          ].map((step, i) => (
            <motion.div 
              key={i}
              className="timeline-item relative pl-16 pb-10 last:pb-0 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }} // Changed to false for better reliability
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-700 group-last:hidden"></div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}