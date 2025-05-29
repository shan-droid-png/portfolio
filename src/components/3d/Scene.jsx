import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  AccumulativeShadows,
  RandomizedLight,
  Sparkles,
  Stars,
  Cloud,
  PerformanceMonitor
} from '@react-three/drei';
import SkillsCube from './SkillsCube';
import FloatingText from './FloatingText';

const MovingStars = () => {
  const starsRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    starsRef.current.rotation.x = Math.cos(t) * 0.2;
    starsRef.current.rotation.y = Math.sin(t) * 0.2;
  });

  return (
    <group ref={starsRef}>
      <Stars 
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const Scene = ({ text }) => {
  const [perfSetting, setPerfSetting] = React.useState(1);

  return (
    <div className="h-[400px] w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden relative">
      <Canvas
        shadows
        dpr={[1, perfSetting]}
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerformanceMonitor
          onIncline={() => setPerfSetting(2)}
          onDecline={() => setPerfSetting(1)}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
          />
          
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment and Effects */}
          <Environment preset="night" />
          <AccumulativeShadows
            position={[0, -1, 0]}
            scale={10}
            color="#316d39"
            opacity={0.3}
            frames={60}
            temporal
            blend={30}
          >
            <RandomizedLight
              position={[5, 5, 10]}
              amount={8}
              radius={1}
              ambient={0.5}
              intensity={1}
              size={10}
              bias={0.001}
            />
          </AccumulativeShadows>
          
          {/* Atmospheric Effects */}
          <MovingStars />
          <Sparkles 
            count={50}
            scale={10}
            size={1}
            speed={0.3}
            opacity={0.1}
          />
          <Cloud
            opacity={0.5}
            speed={0.4}
            width={10}
            depth={1.5}
            segments={20}
          />

          <Suspense fallback={null}>
            {text ? (
              <FloatingText text={text} />
            ) : (
              <SkillsCube />
            )}
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      
      {/* Loading Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/50 to-transparent" />
    </div>
  );
};

export default Scene; 