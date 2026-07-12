import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInView from "../animations/FadeInView"

export default function About() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const titleWords = "Crafting Digital Experiences".split(" ")

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <FadeInView>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
              About Me
            </p>
          </FadeInView>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 30, rotateZ: -5 }}
                animate={titleInView ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <FadeInView delay={0.2}>
              <p>
                I&apos;m a passionate developer with a love for creating elegant
                solutions to complex problems. With years of experience in full-stack
                development, I bring ideas to life through clean code and thoughtful design.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <p>
                My approach combines technical expertise with creative
                thinking, ensuring every project I work on is both functional
                and visually compelling.
              </p>
            </FadeInView>
            <FadeInView delay={0.4}>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open source, or experimenting with creative coding
                and generative art.
              </p>
            </FadeInView>
          </div>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            animate={inView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10 blur-3xl" />
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden flex items-center justify-center">
              <div className="text-8xl font-bold text-neutral-300 dark:text-neutral-600">
                {">"}_
              </div>
            </div>
            <motion.div
              className="absolute -inset-4 rounded-3xl border border-amber-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
