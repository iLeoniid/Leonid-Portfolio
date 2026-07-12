import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInView from "../animations/FadeInView"
import { projects } from "../../data/portfolio"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "../ui/SocialIcons"

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: -3,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="group relative rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-colors"
      style={{ perspective: 800 }}
    >
      <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-neutral-300 dark:text-neutral-700">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4 text-center">
            Featured Work
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-16 text-center">
            Selected Projects
          </h2>
        </FadeInView>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
