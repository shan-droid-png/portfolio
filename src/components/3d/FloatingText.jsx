import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const FloatingText = ({ text }) => {
  const textRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    textRef.current.position.y = Math.sin(time) * 0.1 + 0.1;
    textRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Text
      ref={textRef}
      fontSize={0.5}
      color="#3b82f6"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter-Bold.woff"
    >
      {text}
    </Text>
  );
};

export default FloatingText; 