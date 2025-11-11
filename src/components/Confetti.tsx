import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export const Confetti = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 1000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 10 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3);
    const rcbRed = new THREE.Color("#EC1C24");
    const gold = new THREE.Color("#FFD700");
    
    for (let i = 0; i < particlesCount; i++) {
      const color = Math.random() > 0.5 ? rcbRed : gold;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] -= 0.02; // Fall down

        // Reset to top when reaching bottom
        if (positions[i3 + 1] < -2) {
          positions[i3 + 1] = 15;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};
