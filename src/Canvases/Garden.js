import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Html } from "@react-three/drei";

import SimpleBox from '../Geometry/Box';

function Garden() {
  return (
    <Canvas
    camera={{ fov: 75, position: [8, 6, 8]}}
    shadows>
        <Suspense fallback={null}>
          <directionalLight
            intensity={0.1}
            castShadow={true}
            shadow-bias={-0.0002}
            shadow-mapSize={[32, 32]}
          />
          <ambientLight/>
          <World />
          <SimpleBox />

          <OrbitControls maxDistance={10}/>
        </Suspense>
    </Canvas>
  );
}

function World() {
  const texture = useLoader(TextureLoader, '/assets/garden/garden.jpg');
  
  return (
   <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default Garden;
