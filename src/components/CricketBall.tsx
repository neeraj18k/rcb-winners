import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface CricketBallProps {
  position: [number, number, number];
}

export const CricketBall = ({ position }: CricketBallProps) => {
  const ballRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (ballRef.current) {
      ballRef.current.rotation.x += 0.01;
      ballRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      {/* Main ball */}
      <mesh ref={ballRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#8B0000"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Seam line 1 */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.4, 0.02, 8, 50]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Seam line 2 */}
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.4, 0.02, 8, 50]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};
