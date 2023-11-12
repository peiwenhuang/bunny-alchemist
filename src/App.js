import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Forest from './Canvases/Start';
import DialogBox from './Dialogue/Dialogue';
// Just hard coding these for now to demonstrate our DialogBox component.
const messages = [
    "This is a very cool RPG dialog message.",
    "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
    "Remember to wash your hands!",
];

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <DialogBox messages={messages} msgLength={messages.length} />
        <Forest />
      </Suspense>
    </>
  );
}


export default App;
