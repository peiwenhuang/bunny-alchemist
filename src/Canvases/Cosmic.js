import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from "@react-three/drei";

import CosmicSphere from '../Geometry/Cosmic/CosmicSphere';
import BreathingSphere from '../Geometry/Cosmic/BreathingSphere';

function Cosmic({ breathing, setBreathing, handleSetDialogScene }) {

    return (
        <Canvas
        camera={{ fov: 90, position: [-3, 2, 5]}}
        shadows>
            <Suspense fallback={null}>
                <fog attach="fog" args={["pink", 0, 50]} />
                <ambientLight intensity={0.1} />
                <directionalLight
                    intensity={0.5}
                    castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                />
                <BreathingSphere
                breathing={breathing} setBreathing={setBreathing}
                handleResumeDialog={() => handleSetDialogScene("cosmic-post-breath")} />
                <CosmicSphere />
                
                <OrbitControls maxDistance={10} />
            </Suspense>
        </Canvas>
    );
}


export default Cosmic;
