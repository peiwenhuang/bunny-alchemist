import React, { useRef, useState, Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import GltfModel from './Model';

const ModelViewer = ({ modelpath, scale = 10, position = [0, 0, 0]}) => {
    return (
        <Suspense fallback={null}>
            <GltfModel modelpath={modelpath} scale={scale} position={position} />
            <OrbitControls />
        </Suspense>
    );
}

export default ModelViewer;