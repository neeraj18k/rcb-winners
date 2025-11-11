import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const Trophy = () => {
  const trophyRef = useRef<Group>(null);

  useFrame((state) => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={trophyRef} position={[0, 0, 0]}>
      {/* Cup */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1, 0.8, 1.5, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Cup handles */}
      <mesh position={[-1.2, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.4, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[1.2, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.4, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Base */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Stand */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1, 1.2, 0.8, 32]} />
        <meshStandardMaterial color="#8B0000" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Bottom platform */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} />
        <meshStandardMaterial color="#8B0000" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
};
