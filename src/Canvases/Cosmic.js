import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Plane } from "@react-three/drei";

import CosmicSphere from '../Geometry/Cosmic/CosmicSphere';

// TODO:


function Cosmic() {
    return (
        <Canvas
        camera={{ fov: 75, position: [8, 6, 8]}}
        shadows>
            <Suspense fallback={null}>
                <ambientLight />
                <CosmicSphere />
                <OrbitControls maxDistance={10} />
            </Suspense>
        </Canvas>
    );
}


export default Cosmic;
