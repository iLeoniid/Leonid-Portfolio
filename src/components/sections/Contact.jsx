import { useState } from "react"
import { motion } from "framer-motion"
import FadeInView from "../animations/FadeInView"
import { personalInfo } from "../../data/portfolio"
import { Send, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <FadeInView>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
              Get in Touch
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something great.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <Mail size={18} className="text-amber-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <MapPin size={18} className="text-amber-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.2} direction="right">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>
          </form>
        </FadeInView>
      </div>
    </section>
  )
}
