import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import DialogBox from './Dialogue/Dialogue';



const messages = [
    "This is a very cool RPG dialog message.",
    "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
    "Remember to wash your hands!",
];
const scenes = ["forest", "cottage", "cosmic", "garden", "desk"];

function App() {
  const [scene, setScene] = useState("cottage");

  const handleSetScene = (newScene) => {
    setScene(newScene);
  }


  const display = () => {
    if(scene == "forest") {
      console.log("forest");
      return <Forest />
    }
    if(scene == "cottage") {
      console.log("cottage");
      return <Cottage />
    }
    if(scene == "cosmic") {
      return <Forest />
    }
    if(scene == "garden") {
      return <Forest />
    }
    if(scene == "desk") {
      return <Forest />
    }
  }

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          {display()}
          <OrbitControls maxDistance={5} />
        </Suspense>
      </Canvas>
      <DialogBox messages={messages} msgLength={messages.length} />
    </>
  );
}


export default App;
