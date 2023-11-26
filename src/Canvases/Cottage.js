import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Plane } from "@react-three/drei";

import cottagePath from '../assets/cottage/cottage.jpg';
import { Griffon } from '../Geometry/Cottage/Griffon';

import World from '../Geometry/World';

function Cottage() {
    return (
        <Canvas
        camera={{ fov: 60, position: [40, 0, 30] }}
        shadows>
            <Suspense fallback={null}>
                <Griffon position={[10, -55, 5]} scale={240} rotation={[THREE.MathUtils.degToRad(-15), THREE.MathUtils.degToRad(60), THREE.MathUtils.degToRad(10)]}/>
                <World texturePath={cottagePath} args={[100, 60, 40]} position={[0, -60, 0]} />
                <OrbitControls target={[2, -40, 0]} />

                <axesHelper size={20} />
                <gridHelper size={20} />
            </Suspense>
        </Canvas>
    );
}

export default Cottage;
