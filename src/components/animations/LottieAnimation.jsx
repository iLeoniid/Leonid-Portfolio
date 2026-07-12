import Lottie from "lottie-react"
import { useInView } from "react-intersection-observer"

export default function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className={className}>
      {inView && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
        />
      )}
    </div>
  )
}
