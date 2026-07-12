import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeInView from "../animations/FadeInView"
import { testimonials } from "../../data/portfolio"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(autoPlayRef.current)
  }, [])

  const next = () => {
    clearInterval(autoPlayRef.current)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    clearInterval(autoPlayRef.current)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
            Testimonials
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-16">
            What People Say
          </h2>
        </FadeInView>

        <div className="relative min-h-[280px]">
          <Quote
            size={48}
            className="absolute top-0 left-1/2 -translate-x-1/2 text-neutral-200 dark:text-neutral-800"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.95, rotateZ: -1 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.95, rotateZ: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              className="pt-16"
            >
              <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <ChevronLeft size={18} className="text-neutral-600 dark:text-neutral-400" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearInterval(autoPlayRef.current)
                  setCurrent(i)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current
                    ? "bg-amber-500"
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <ChevronRight size={18} className="text-neutral-600 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
