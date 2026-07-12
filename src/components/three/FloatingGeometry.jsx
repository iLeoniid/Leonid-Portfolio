import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"

function Shape({ position, color, speed = 1 }) {
  const mesh = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = time * 0.3 * speed
    mesh.current.rotation.y = time * 0.2 * speed
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingGeometry() {
  return (
    <group>
      <Shape position={[-3, 1, -2]} color="#f59e0b" speed={0.8} />
      <Shape position={[3, -1, -3]} color="#f97316" speed={1.2} />
      <Shape position={[0, 2, -4]} color="#fbbf24" speed={0.6} />
      <Shape position={[-2, -2, -2]} color="#ea580c" speed={1} />
    </group>
  )
}
