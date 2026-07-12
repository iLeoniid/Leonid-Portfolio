import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInView from "../animations/FadeInView"
import { experience } from "../../data/portfolio"

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateZ: index % 2 === 0 ? -3 : 3 }}
      animate={inView ? { opacity: 1, x: 0, rotateZ: 0 } : {}}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
      {index < experience.length - 1 && (
        <div className="absolute left-[5px] top-4 w-0.5 h-full bg-gradient-to-b from-amber-500/50 to-transparent" />
      )}
      <div className="ml-4">
        <p className="text-sm text-amber-500 font-medium mb-1">{item.period}</p>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
          {item.role}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
          {item.company}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInView>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            Career Path
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-16 text-center">
            Experience
          </h2>
        </FadeInView>

        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
