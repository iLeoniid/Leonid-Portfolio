import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"

export default function Particles({ count = 200 }) {
  const mesh = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() * 2 + 0.5
    }
    return { positions, sizes }
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.05
    mesh.current.rotation.x = time * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#f59e0b"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
