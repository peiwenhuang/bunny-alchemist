import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Html } from "@react-three/drei";

import SimpleBox from '../Geometry/Box';

function Forest() {
  return (
    <Canvas
    camera={{ fov: 75, position: [8, 6, 8]}}
    shadows>
        <Suspense fallback={null}>
          <directionalLight
            intensity={1}
            castShadow={true}
            shadow-bias={-0.0002}
            shadow-mapSize={[32, 32]}
          />
          <ambientLight />
          <World />
          <SimpleBox />

          <OrbitControls />
        </Suspense>
    </Canvas>
  );
}

function World() {
  const texture = useLoader(TextureLoader, '/assets/Radiant_Painting_equirectangular-jpg_a_magical_forest_with_1802146339_9220626.jpg');
  
  return (
   <mesh>
        {/* TODO: scaling OR disable zoom out*/}
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default Forest;
