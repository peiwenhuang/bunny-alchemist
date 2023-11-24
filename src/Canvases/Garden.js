import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import gardenPath from "../assets/garden/garden.jpg";
import SimpleBox from '../Geometry/Box';

function Garden({ handleSetDialogScene }) {
  return (
    <Canvas
    camera={{ fov: 75, position: [-8, 6, -8]}}
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
          {/* herb 1 */}
          <SimpleBox position={[30, 0, 15]}
          handleSetDialogScene={() => handleSetDialogScene("chamomile")} />
          {/* herb 2 */}
          <SimpleBox position={[40, 0, -15]}
          handleSetDialogScene={() => handleSetDialogScene("herb 2")} />
          {/* herb 3 */}
          <SimpleBox position={[5, 0, 45]}
          handleSetDialogScene={() => handleSetDialogScene("herb 3")} />

          <OrbitControls maxDistance={10}/>
        </Suspense>
    </Canvas>
  );
}

function World() {
  const texture = useLoader(TextureLoader, gardenPath);
  
  return (
   <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default Garden;
