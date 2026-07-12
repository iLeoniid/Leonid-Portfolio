import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInView from "../animations/FadeInView"
import { skills } from "../../data/portfolio"

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {skill.name}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-500">
          {skill.level}%
        </span>
      </div>
      <div ref={ref} className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            Expertise
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-16 text-center">
            Skills & Technologies
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <FadeInView key={category} delay={0.1}>
              <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-500 mb-6">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        index={i}
                      />
                    ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
