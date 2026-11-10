import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BikeModel3D } from './BikeModel3D';

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2} color="#0b1f16" />
        
        {/* Main Key Studio Light */}
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#ffffff" />
        
        {/* Powerful Emerald Rim Light from behind to highlight silhouette */}
        <spotLight
          position={[0, 1.5, -4.5]}
          intensity={7}
          color="#18e888"
          angle={1.2}
          penumbra={0.8}
        />
        
        {/* Mint fill light */}
        <directionalLight position={[-5, -1, 3]} intensity={1.5} color="#a4dfd6" />
        
        <Suspense fallback={null}>
          <BikeModel3D />
        </Suspense>
      </Canvas>
    </div>
  );
};
