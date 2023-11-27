import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import gardenPath from "../assets/garden/garden.jpg";
import World from '../Geometry/World';
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
          <World texturePath={gardenPath} />
          {/* herb 1 */}
          <SimpleBox position={[30, 0, 15]}
          handleSetDialogScene={() => handleSetDialogScene("chamomile")} />
          {/* herb 2 */}
          <SimpleBox position={[40, 0, -15]}
          handleSetDialogScene={() => handleSetDialogScene("herb 2")} />
          {/* herb 3 */}
          <SimpleBox position={[5, 0, 45]}
          handleSetDialogScene={() => handleSetDialogScene("herb 3")} />

          <OrbitControls maxDistance={10} autoRotate autoRotateSpeed={0.5}/>
        </Suspense>
    </Canvas>
  );
}



export default Garden;
