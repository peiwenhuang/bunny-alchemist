import React, { useRef, useState, Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import GltfModel from './Model';

const ModelViewer = ({ modelpath, scale = 1, position = [0, 0, 0], rotate = false }) => {
    return (
        <Suspense fallback={null}>
            <GltfModel modelpath={modelpath} scale={scale} position={position} rotate={rotate} />
            <OrbitControls />
        </Suspense>
    );
}

export default ModelViewer;