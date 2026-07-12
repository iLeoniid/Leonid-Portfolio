import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Particles from "./Particles"
import FloatingGeometry from "./FloatingGeometry"

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Particles count={150} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  )
}
