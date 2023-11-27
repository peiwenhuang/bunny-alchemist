import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import forestPath from '../assets/forest/forest.jpg';
import World from '../Geometry/World';

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

          <OrbitControls maxDistance={10} autoRotate autoRotateSpeed={0.5}/>
        </Suspense>
    </Canvas>
  );
}

export default Forest;
