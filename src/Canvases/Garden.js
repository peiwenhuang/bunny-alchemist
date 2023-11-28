import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import gardenPath from "../assets/garden/garden.jpg";
import { Plant } from '../Geometry/Garden/Herbs';
import World from '../Geometry/World';
import SimpleBox from '../Geometry/Box';

function Garden({ clickable, setClickable, handleSetDialogScene }) {

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

          <Plant position={[-30, -15, -15]}
          type="chamomile"
          clickable={clickable}
          setClickable={setClickable}
          handleSetDialogScene={() => handleSetDialogScene("chamomile")} />

          <Plant position={[40, -15, -15]}
          type="evening-primrose"
          clickable={clickable}
          setClickable={setClickable}
          handleSetDialogScene={() => handleSetDialogScene("evening-primrose")} />

          <Plant position={[5, -15, 45]}
          type="rose"
          clickable={clickable}
          setClickable={setClickable}
          handleSetDialogScene={() => handleSetDialogScene("rose")} />

          <OrbitControls maxDistance={10} autoRotate={clickable ? true: false} autoRotateSpeed={0.1}/>
        </Suspense>
    </Canvas>
  );
}



export default Garden;
