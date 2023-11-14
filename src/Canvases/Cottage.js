import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Plane, Html } from "@react-three/drei";

import SimpleBox from '../Geometry/Box';
import ModelViewer from '../Models/ModelViewer';

// TODO:
// 1. add walls
// 2. adjust camera position

function Cottage() {

    return (
        <>
            <ambientLight />
            <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                args={[1000, 1000]}
            >
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            
            <ModelViewer
            modelpath="assets/cutesy_styled_wizard_themed_props.glb"
            /> 

            <OrbitControls maxDistance={5} />
        </>
    );
}

export default Cottage;
