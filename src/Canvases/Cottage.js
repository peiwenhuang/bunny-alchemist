import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Plane } from "@react-three/drei";

import cottagePath from '../assets/cottage/cottage.jpg';
import AlchemyTable from '../Geometry/Cottage/AlchemyTable';
import ArmillarySphere from '../Geometry/Cottage/ArmillarySphere';
import Alchemist from '../Geometry/Cottage/Alchemist';

import World from '../Geometry/World';

// TODO:
// 1. add walls- DONE
// 2. adjust camera position
// 3. adjuts character facing angle & shadow
// 4. animating character

function Cottage() {
    return (
        <Canvas
        camera={{ fov: 75, position: [8, 6, 8]}}
        shadows>
            <Suspense fallback={null}>
  
                <Alchemist position={[4, -15, -10]} />

                <World texturePath={cottagePath} args={[20, 60, 40]} />
                <OrbitControls maxDistance={10} />
            </Suspense>
        </Canvas>
    );
}

function Room() {
    const colorMap = useLoader(TextureLoader, cottagePath);
    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(2, 2);

    return (
        <>
            <ambientLight />
            
        </>
    );
}

export default Cottage;
