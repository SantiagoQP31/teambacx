import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const BikeModel3D: React.FC = () => {
  const bikeGroup = useRef<THREE.Group>(null);
  const wheelsGroup = useRef<THREE.Group>(null);

  // Smooth mouse tilt & wheel rotation
  useFrame((state) => {
    if (!bikeGroup.current) return;
    
    // Smooth lerp for mouse parallax
    const targetRotY = state.pointer.x * 0.35;
    const targetRotX = -state.pointer.y * 0.15;
    
    bikeGroup.current.rotation.y = THREE.MathUtils.lerp(bikeGroup.current.rotation.y, targetRotY, 0.05);
    bikeGroup.current.rotation.x = THREE.MathUtils.lerp(bikeGroup.current.rotation.x, targetRotX, 0.05);
    
    // Subtle idle floating motion
    bikeGroup.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 - 0.2;

    // Slow rotation on wheels
    if (wheelsGroup.current) {
      wheelsGroup.current.children.forEach((wheel) => {
        wheel.rotation.z += 0.008;
      });
    }
  });

  // Materials
  const carbonMat = new THREE.MeshStandardMaterial({
    color: '#0d1612',
    roughness: 0.2,
    metalness: 0.8,
  });

  const mintAccentMat = new THREE.MeshStandardMaterial({
    color: '#18e888',
    roughness: 0.3,
    metalness: 0.5,
    emissive: '#18e888',
    emissiveIntensity: 0.15,
  });

  const metalMat = new THREE.MeshStandardMaterial({
    color: '#b0c4b8',
    roughness: 0.1,
    metalness: 0.95,
  });

  const tireMat = new THREE.MeshStandardMaterial({
    color: '#080a09',
    roughness: 0.85,
    metalness: 0.05,
  });

  return (
    <group ref={bikeGroup} scale={1.4} rotation={[0, -0.2, 0]}>
      {/* Carbon Frame Tubes */}
      {/* Top Tube */}
      <mesh position={[0, 0.65, 0]} rotation={[0, 0, 0.1]} material={carbonMat}>
        <cylinderGeometry args={[0.045, 0.04, 1.35, 16]} />
      </mesh>

      {/* Down Tube (Thick aero profile) */}
      <mesh position={[-0.1, 0.15, 0]} rotation={[0, 0, -0.68]} material={carbonMat}>
        <boxGeometry args={[0.07, 1.45, 0.06]} />
      </mesh>

      {/* Seat Tube */}
      <mesh position={[-0.55, 0.35, 0]} rotation={[0, 0, 0.28]} material={carbonMat}>
        <cylinderGeometry args={[0.045, 0.045, 1.25, 16]} />
      </mesh>

      {/* Seat Stays */}
      <mesh position={[-0.95, 0.35, 0.08]} rotation={[0, 0, -0.6]} material={carbonMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.95, 12]} />
      </mesh>
      <mesh position={[-0.95, 0.35, -0.08]} rotation={[0, 0, -0.6]} material={carbonMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.95, 12]} />
      </mesh>

      {/* Chain Stays */}
      <mesh position={[-0.95, -0.18, 0.08]} rotation={[0, 0, 0.08]} material={carbonMat}>
        <cylinderGeometry args={[0.025, 0.025, 0.85, 12]} />
      </mesh>
      <mesh position={[-0.95, -0.18, -0.08]} rotation={[0, 0, 0.08]} material={carbonMat}>
        <cylinderGeometry args={[0.025, 0.025, 0.85, 12]} />
      </mesh>

      {/* Head Tube */}
      <mesh position={[0.62, 0.68, 0]} rotation={[0, 0, 0.28]} material={mintAccentMat}>
        <cylinderGeometry args={[0.055, 0.055, 0.35, 16]} />
      </mesh>

      {/* Front Fork */}
      <mesh position={[0.78, 0.22, 0.07]} rotation={[0, 0, 0.28]} material={carbonMat}>
        <cylinderGeometry args={[0.03, 0.025, 0.95, 12]} />
      </mesh>
      <mesh position={[0.78, 0.22, -0.07]} rotation={[0, 0, 0.28]} material={carbonMat}>
        <cylinderGeometry args={[0.03, 0.025, 0.95, 12]} />
      </mesh>

      {/* Aerobar Drop Handlebars */}
      <group position={[0.68, 0.85, 0]}>
        {/* Stem */}
        <mesh position={[-0.05, 0, 0]} rotation={[0, 0, 1.57]} material={carbonMat}>
          <cylinderGeometry args={[0.03, 0.03, 0.18, 12]} />
        </mesh>
        {/* Horizontal bar */}
        <mesh position={[0.02, 0, 0]} rotation={[1.57, 0, 0]} material={carbonMat}>
          <cylinderGeometry args={[0.025, 0.025, 0.55, 12]} />
        </mesh>
        {/* Drops */}
        <mesh position={[0.08, -0.1, 0.25]} rotation={[0, 0, 0.5]} material={carbonMat}>
          <torusGeometry args={[0.09, 0.02, 8, 16, Math.PI * 0.9]} />
        </mesh>
        <mesh position={[0.08, -0.1, -0.25]} rotation={[0, 0, 0.5]} material={carbonMat}>
          <torusGeometry args={[0.09, 0.02, 8, 16, Math.PI * 0.9]} />
        </mesh>
      </group>

      {/* Aero Saddle */}
      <group position={[-0.45, 1.05, 0]}>
        <mesh rotation={[0, 0, -0.1]} material={carbonMat}>
          <boxGeometry args={[0.35, 0.04, 0.14]} />
        </mesh>
        <mesh position={[0.08, -0.01, 0]} rotation={[0, 0, -0.2]} material={mintAccentMat}>
          <boxGeometry args={[0.15, 0.03, 0.08]} />
        </mesh>
      </group>

      {/* Crankset & Pedals */}
      <group position={[-0.45, -0.25, 0]}>
        <mesh rotation={[1.57, 0, 0]} material={metalMat}>
          <cylinderGeometry args={[0.14, 0.14, 0.04, 24]} />
        </mesh>
        {/* Cranks */}
        <mesh position={[0, 0.12, 0.1]} rotation={[0, 0, 0]} material={carbonMat}>
          <boxGeometry args={[0.04, 0.24, 0.02]} />
        </mesh>
        <mesh position={[0, -0.12, -0.1]} rotation={[0, 0, 0]} material={carbonMat}>
          <boxGeometry args={[0.04, 0.24, 0.02]} />
        </mesh>
      </group>

      {/* Wheels */}
      <group ref={wheelsGroup}>
        {/* Rear Wheel */}
        <group position={[-1.35, -0.25, 0]}>
          {/* Tire */}
          <mesh material={tireMat}>
            <torusGeometry args={[0.62, 0.05, 16, 48]} />
          </mesh>
          {/* Deep Section Carbon Rim */}
          <mesh material={carbonMat}>
            <torusGeometry args={[0.55, 0.065, 16, 48]} />
          </mesh>
          {/* Hub */}
          <mesh rotation={[1.57, 0, 0]} material={metalMat}>
            <cylinderGeometry args={[0.045, 0.045, 0.15, 16]} />
          </mesh>
          {/* Disc Brake Rotor */}
          <mesh position={[0, 0, 0.05]} rotation={[1.57, 0, 0]} material={metalMat}>
            <cylinderGeometry args={[0.16, 0.16, 0.01, 24]} />
          </mesh>
        </group>

        {/* Front Wheel */}
        <group position={[1.05, -0.25, 0]}>
          {/* Tire */}
          <mesh material={tireMat}>
            <torusGeometry args={[0.62, 0.05, 16, 48]} />
          </mesh>
          {/* Deep Section Carbon Rim */}
          <mesh material={carbonMat}>
            <torusGeometry args={[0.55, 0.065, 16, 48]} />
          </mesh>
          {/* Hub */}
          <mesh rotation={[1.57, 0, 0]} material={metalMat}>
            <cylinderGeometry args={[0.045, 0.045, 0.15, 16]} />
          </mesh>
          {/* Disc Brake Rotor */}
          <mesh position={[0, 0, 0.05]} rotation={[1.57, 0, 0]} material={metalMat}>
            <cylinderGeometry args={[0.16, 0.16, 0.01, 24]} />
          </mesh>
        </group>
      </group>
    </group>
  );
};
