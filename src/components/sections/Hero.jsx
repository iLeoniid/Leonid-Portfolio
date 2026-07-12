import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import TypeWriter from "../animations/TypeWriter"
import FadeInView from "../animations/FadeInView"
import Scene from "../three/Scene"
import { personalInfo } from "../../data/portfolio"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-char", {
        opacity: 0,
        y: 100,
        rotateX: -120,
        scale: 0.5,
        stagger: { each: 0.06, from: "random" },
        duration: 1.2,
        delay: 0.3,
        ease: "elastic.out(1, 0.4)",
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const nameChars = personalInfo.name.split("")

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <Scene />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <FadeInView delay={0.2}>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-6">
            {">"} Portfolio
          </p>
        </FadeInView>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6 perspective-[1000px]">
          {nameChars.map((char, i) => (
            <span key={i} className="hero-title-char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <FadeInView delay={0.8}>
          <div className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-8">
            <TypeWriter
              sequences={[
                "Game Developer",
                2000,
                "Anti-Cheat Engineer",
                2000,
                "Systems Architect",
                2000,
                "",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </FadeInView>

        <FadeInView delay={1}>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12 text-lg">
            {personalInfo.description}
          </p>
        </FadeInView>

        <FadeInView delay={1.2}>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-medium hover:bg-amber-600 hover:scale-110 active:scale-95 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </FadeInView>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-neutral-400" />
      </motion.div>
    </section>
  )
}
