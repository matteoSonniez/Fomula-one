"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ targetRotation }) => {
  const { scene } = useGLTF('/model-fefe/scene.gltf');
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.01;
    }
  });
  
  return <primitive ref={ref} object={scene} scale={1.5} />;
}

const Page = () => {
  const [rotation, setRotation] = useState(-Math.PI / 2);
  const [targetRotation, setTargetRotation] = useState(-Math.PI / 2);

  const handleRotation = () => {
    setTargetRotation(prevRotation => prevRotation + Math.PI);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        {/* Lumière ambiante avec intensité augmentée */}
        <ambientLight intensity={1} />
        {/* Lumière directionnelle principale */}
        <directionalLight 
          position={[2, 5, 2]} 
          intensity={8} 
          castShadow 
        />
        {/* Lumière directionnelle supplémentaire */}
        <directionalLight 
          position={[-2, -5, -2]} 
          intensity={10} 
        />
        {/* Lumière ponctuelle */}
        <pointLight 
          position={[0, 10, 0]} 
          intensity={10} 
          castShadow 
        />
        <Model targetRotation={targetRotation} />
        <OrbitControls />
      </Canvas>
      <button onClick={handleRotation} className="bg-white absolute top-20 cursor-pointer">
        Rotate 180°
      </button>
    </div>
  );
}

export default Page;



//className="bg-white absolute top-20 cursor-pointer"
