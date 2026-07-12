import FadeInView from "../animations/FadeInView"
import { BookOpen } from "lucide-react"

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInView>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
            Blog
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
            Latest Articles
          </h2>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="max-w-md mx-auto p-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <BookOpen
              size={48}
              className="mx-auto mb-4 text-neutral-300 dark:text-neutral-700"
            />
            <p className="text-neutral-500 dark:text-neutral-400">
              Articles coming soon. Stay tuned for insights on development,
              design, and technology.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
