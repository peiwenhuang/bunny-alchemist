import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from "@react-three/drei";

import CosmicSphere from '../Geometry/Cosmic/CosmicSphere';
import BreathingSphere from '../Geometry/Cosmic/BreathingSphere';

function Cosmic({ breathing, setBreathing, handleSetDialogScene, completeMeditation }) {

    return (
        <Canvas
        camera={{ fov: 90, position: [0, 3, 3]}}
        shadows>
            <Suspense fallback={null}>
                <fog attach="fog" args={["pink", 6, 30]} />
                <ambientLight intensity={0.8} />
                <directionalLight
                intensity={0.8}
                castShadow
                />
                <BreathingSphere
                breathing={breathing} setBreathing={setBreathing}
                handleResumeDialog={() => handleSetDialogScene("cosmic-post-breath")}
                completeMeditation={completeMeditation} />
                <CosmicSphere />
                
                <OrbitControls maxDistance={10} />
            </Suspense>
        </Canvas>
    );
}


export default Cosmic;
