"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

function Scene() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4d4dff" />
    </mesh>
  )
}

export default function ThreeDImage() {
  return (
    <div className="absolute top-20 right-20 w-96 h-72 bg-gray-900 rounded-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
} 