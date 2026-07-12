import { useEffect, useRef } from "react"
import SplitType from "split-type"
import gsap from "gsap"

export default function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  splitBy = "words, chars",
  delay = 0,
  stagger = 0.03,
  duration = 0.8,
}) {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const split = new SplitType(el, { types: splitBy })

    gsap.from(split.chars, {
      opacity: 0,
      y: 40,
      rotateZ: -10,
      scale: 0.8,
      duration: 0.6,
      delay,
      stagger: { each: stagger, from: "random" },
      ease: "elastic.out(1, 0.5)",
    })

    return () => split.revert()
  }, [])

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  )
}
