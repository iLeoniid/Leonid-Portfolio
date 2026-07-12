import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapScrollTrigger(animationFn, dependencies = []) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      animationFn(el)
    }, el)

    return () => ctx.revert()
  }, dependencies)

  return ref
}
