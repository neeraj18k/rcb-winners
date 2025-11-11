import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Trophy } from "./Trophy";
import { CricketBall } from "./CricketBall";
import { Confetti } from "./Confetti";

export const VictoryScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#EC1C24" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#FFD700"
          castShadow
        />

        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Main Trophy */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Trophy />
        </Float>

        {/* Cricket Balls */}
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <CricketBall position={[-3, 1, -2]} />
        </Float>
        <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
          <CricketBall position={[3, 2, -1]} />
        </Float>

        {/* Confetti particles */}
        <Confetti />

        {/* Ring platform */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <ringGeometry args={[2, 4, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.5}
            anisotropy={1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#EC1C24"
          />
        </mesh>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
