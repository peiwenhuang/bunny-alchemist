import React, { useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Plane, Loader } from "@react-three/drei";

import cottagePath from '../assets/cottage/cottage.jpg';
import { Griffon } from '../Geometry/Cottage/Griffon';
import { StrengthPotion } from '../Geometry/Cottage/StrengthPotion';
import { Envelope } from '../Geometry/Cottage/Envelope';

import World from '../Geometry/World';

function Cottage({ makePotion, handleSetDialogScene, completePotion }) {
    return (
        <>
            <Canvas
            camera={{ fov: 60, position: [40, 0, 30] }}
            shadows>
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <directionalLight
                    intensity={0.1}
                    shadow-bias={-0.0002}
                    shadow-mapSize={[32, 32]}
                    />
                    <StrengthPotion position={[100, -50, 100]}
                    makePotion={makePotion}
                    handleResumeDialog={() => handleSetDialogScene("cottage-purple-potion")}
                    completePotion={completePotion}
                    />
                    
                    <Griffon position={[10, -55, 5]} scale={240} rotation={[THREE.MathUtils.degToRad(-15), THREE.MathUtils.degToRad(60), THREE.MathUtils.degToRad(10)]}/>
                    <World texturePath={cottagePath} args={[100, 60, 40]} position={[0, -60, 0]} />
                    <OrbitControls target={[2, -40, 0]} maxDistance={80} />

                    {/* <axesHelper size={20} />
                    <gridHelper size={20} /> */}
                </Suspense>
            </Canvas>
        </>
    );
}

export default Cottage;
