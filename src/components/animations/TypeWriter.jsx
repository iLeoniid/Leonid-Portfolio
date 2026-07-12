import { TypeAnimation } from "react-type-animation"

export default function TypeWriter({
  sequences,
  className = "",
  speed = 50,
  wrapper = "span",
  repeat = Infinity,
  ...props
}) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper={wrapper}
      speed={speed}
      repeat={repeat}
      className={className}
      {...props}
    />
  )
}
