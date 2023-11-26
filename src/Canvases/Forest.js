import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Html } from "@react-three/drei";

import forestPath from '../assets/forest/forest.jpg';
import World from '../Geometry/World';
import SimpleBox from '../Geometry/Box';

function Forest() {
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
          <ambientLight
          />
          <World texturePath={forestPath}/>
          <SimpleBox />

          <OrbitControls maxDistance={10}/>
        </Suspense>
    </Canvas>
  );
}

export default Forest;
