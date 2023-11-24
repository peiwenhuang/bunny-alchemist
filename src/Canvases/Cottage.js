import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Plane } from "@react-three/drei";

import cottagePath from '../assets/cottage/wallpaper-texture-3.jpg';
import AlchemyTable from '../Geometry/Cottage/AlchemyTable';
import ArmillarySphere from '../Geometry/Cottage/ArmillarySphere';
import Alchemist from '../Geometry/Cottage/Alchemist';

// TODO:
// 1. add walls- DONE
// 2. adjust camera position

function Cottage() {
    return (
        <Canvas
        camera={{ fov: 75, position: [8, 6, 8]}}
        shadows>
            <Suspense fallback={null}>
                <Room />
                <Alchemist />
                <AlchemyTable position={[-15, 0, -12]}/>
                <ArmillarySphere position={[-15, 2, 0]}/>

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
            <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                args={[40, 40]}
                receiveShadow
            >
                <meshStandardMaterial attach="material" color={"white"} />
            </Plane>
            <Plane
                position={[0, 0, -20]}
                args={[40, 50]}
            >
                <meshStandardMaterial attach="material" map={colorMap} />
            </Plane>
            <Plane
                rotation={[0, Math.PI / 2, 0]}
                position={[-20, 0, 0]}
                args={[40, 50]}
            >
                <meshStandardMaterial attach="material" map={colorMap} />
            </Plane>
            <Plane
                position={[0, 0, 20]}
                args={[40, 50]}
            >
                <meshStandardMaterial attach="material" map={colorMap} />
            </Plane>
            <Plane
                rotation={[0, Math.PI / 2, 0]}
                position={[20, 0, 0]}
                args={[40, 50]}
            >
                <meshStandardMaterial attach="material" map={colorMap} />
            </Plane>
        </>
    );
}

export default Cottage;
