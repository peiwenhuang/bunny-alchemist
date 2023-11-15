import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import Cosmic from './Canvases/Cosmic';
import DialogBox from './Dialogue/Dialogue';

const scenes = ["forest", "cottage", "cosmic", "garden", "desk"];

function App() {
  const [scene, setScene] = useState("cosmic");
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleSetScene = (newScene) => {
    // TODO: set transition
    setScene(newScene);
    setCurrentMessage(0);
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
      return <Cosmic />
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
      {display()}
      <DialogBox
      scene={scene}
      handleSetScene={handleSetScene}
      currentMessage={currentMessage}
      setCurrentMessage={setCurrentMessage}
      />
    </>
  );
}


export default App;
