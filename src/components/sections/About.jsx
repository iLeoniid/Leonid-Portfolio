import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInView from "../animations/FadeInView"
import { Code, Gamepad2, Cpu, Boxes } from "lucide-react"

const highlights = [
  { icon: Gamepad2, label: "Game Dev", desc: "Minecraft servers, gameplay systems, Unreal Engine" },
  { icon: Cpu, label: "Low-Level", desc: "Networking, anti-cheat, performance architecture" },
  { icon: Code, label: "Full Stack", desc: "React, TypeScript, Java, Kotlin" },
  { icon: Boxes, label: "Systems", desc: "Matchmaking, ranking, scalable moderation" },
]

export default function About() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const titleWords = "Building Worlds Through Code".split(" ")

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
                I&apos;m a software and game developer driven by curiosity and the challenge
                of creating systems that feel alive. My work revolves around game development,
                gameplay programming, networking, and low-level systems.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <p>
                I enjoy turning ambitious ideas into polished projects—from Minecraft server
                technology and anti-cheat systems to Unreal Engine experiences and experimental
                gameplay mechanics. Every project is a chance to learn something new.
              </p>
            </FadeInView>
            <FadeInView delay={0.4}>
              <p>
                I&apos;m constantly studying game design, computer graphics, and the technologies
                behind modern games. I believe the best developers never stop learning—that&apos;s
                why I&apos;m always exploring new tools and refining both my technical and creative
                skills, one project at a time.
              </p>
            </FadeInView>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, i) => (
              <FadeInView key={item.label} delay={0.3 + i * 0.1}>
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/30 transition-colors group">
                  <item.icon size={20} className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{item.label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
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
              <div className="text-center">
                <div className="text-6xl font-bold text-neutral-300 dark:text-neutral-600 mb-2">
                  {">"}_
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">while(always_learning) build();</p>
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
