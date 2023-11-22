import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from "@react-three/drei";

import CosmicSphere from '../Geometry/Cosmic/CosmicSphere';
import BreathingSphere from '../Geometry/Cosmic/BreathingSphere';

function Cosmic() {
    return (
        <Canvas
        camera={{ fov: 90, position: [-3, 2, 5]}}
        shadowMap
        colorManagement>
            <Suspense fallback={null}>
                <fog attach="fog" args={["white", 0, 40]} />
                <ambientLight intensity={0.1} />
                <directionalLight
                    intensity={0.5}
                    castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                />
                <BreathingSphere />
                <CosmicSphere />
                
                <OrbitControls maxDistance={10} />
            </Suspense>
        </Canvas>
    );
}


export default Cosmic;
