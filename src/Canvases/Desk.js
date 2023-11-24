import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Plane } from "@react-three/drei";

import Table from '../Geometry/Desk/Table';
import Tarots from '../Geometry/Desk/Tarot';

// TODO: add position grid helper
// adjust cards
function Desk() {
    return (
        <Canvas
        camera={{ fov: 75, position: [-4, 6, -4]}}
        shadows>
            <Suspense fallback={null}>
                <ambientLight intensity={5} />
                <Table />
                <Tarots />

            </Suspense>
        </Canvas>
    );
}

export default Desk;
