import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  distance = 50,
  once = true,
  scale = false,
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 })

  const directions = {
    up: { y: distance, x: 0, rotateZ: -2 },
    down: { y: -distance, x: 0, rotateZ: 2 },
    left: { x: distance, y: 0, rotateZ: -3 },
    right: { x: -distance, y: 0, rotateZ: 3 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: scale ? 0.9 : 1,
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }
          : {}
      }
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  )
}
