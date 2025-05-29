import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

const SkillsCube = () => {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const rotationSpeed = useRef({ x: 0, y: 0 });

  const skills = [
    { name: 'React', description: 'Frontend Development', color: '#61DAFB' },
    { name: 'Node.js', description: 'Backend Development', color: '#68A063' },
    { name: 'JavaScript', description: 'Web Development', color: '#F7DF1E' },
    { name: 'TypeScript', description: 'Type-Safe Code', color: '#3178C6' },
    { name: 'Tailwind', description: 'Styling & Design', color: '#38B2AC' },
    { name: 'Three.js', description: '3D Graphics', color: '#000000' }
  ];

  useFrame((state, delta) => {
    if (clicked) {
      // Smooth rotation animation when clicked
      rotationSpeed.current.x = THREE.MathUtils.lerp(rotationSpeed.current.x, Math.PI * 2, 0.1);
      rotationSpeed.current.y = THREE.MathUtils.lerp(rotationSpeed.current.y, Math.PI * 2, 0.1);
      cubeRef.current.rotation.x += rotationSpeed.current.x * delta;
      cubeRef.current.rotation.y += rotationSpeed.current.y * delta;
      
      // Reset click state after one full rotation
      if (cubeRef.current.rotation.x >= Math.PI * 2) {
        setClicked(false);
        rotationSpeed.current = { x: 0, y: 0 };
        cubeRef.current.rotation.x = 0;
        cubeRef.current.rotation.y = 0;
      }
    } else {
      // Normal rotation
      const baseSpeed = hovered ? 0.5 : 0.2;
      cubeRef.current.rotation.x += delta * baseSpeed;
      cubeRef.current.rotation.y += delta * (baseSpeed * 1.5);
    }
  });

  // Enhanced material properties
  const cubeMaterial = {
    color: clicked ? '#2a2a2a' : '#1a1a1a',
    transparent: true,
    opacity: 0.85,
    metalness: 0.9,
    roughness: 0.1,
    side: 2,
    envMapIntensity: 1.5
  };

  const handleClick = () => {
    setClicked(true);
    setActiveSkill(null);
  };

  const handleFaceHover = (skill) => {
    setActiveSkill(skill);
    setHovered(true);
  };

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
      floatingRange={[0, 0.5]}
    >
      <mesh
        ref={cubeRef}
        scale={[2, 2, 2]}
        onClick={handleClick}
        onPointerOut={() => {
          setHovered(false);
          setActiveSkill(null);
        }}
      >
        {skills.map((skill, index) => {
          const positions = [
            [0, 0, 1.01],    // Front
            [0, 0, -1.01],   // Back
            [1.01, 0, 0],    // Right
            [-1.01, 0, 0],   // Left
            [0, 1.01, 0],    // Top
            [0, -1.01, 0]    // Bottom
          ];
          
          const rotations = [
            [0, 0, 0],                    // Front
            [0, Math.PI, 0],              // Back
            [0, Math.PI / 2, 0],          // Right
            [0, -Math.PI / 2, 0],         // Left
            [-Math.PI / 2, 0, 0],         // Top
            [Math.PI / 2, 0, 0]           // Bottom
          ];

          return (
            <group key={skill.name}>
              <Text
                position={positions[index]}
                rotation={rotations[index]}
                fontSize={0.3}
                color={activeSkill?.name === skill.name ? skill.color : '#60a5fa'}
                maxWidth={1.5}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                onPointerOver={() => handleFaceHover(skill)}
              >
                {skill.name}
              </Text>
            </group>
          );
        })}

        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          {...cubeMaterial}
          emissive={hovered ? activeSkill?.color || '#60a5fa' : '#000000'}
          emissiveIntensity={hovered ? 0.4 : 0}
        />

        {activeSkill && (
          <Html position={[0, -1.5, 0]} center>
            <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
              {activeSkill.description}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
};

export default SkillsCube; 