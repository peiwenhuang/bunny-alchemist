import React, { useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Table from '../Geometry/Desk/Table';
import { TheFool, Strength, TheMagician } from '../Geometry/Desk/Card';

// TODO: randomize cards

function Desk({ handleCardFlip }) {
    const [flipable, setFlipable] = useState(true);
    const handleDeskFlip = (dialogScene, energizer) => {
        setFlipable(false);
        setTimeout(() => handleCardFlip(dialogScene, energizer), 1000);
    }

    return (
        <Canvas
        camera={{ fov: 80, position: [0, 4.5, 0.8]}}
        shadows>
            <Suspense fallback={null}>
                <ambientLight intensity={5} />
                <Table />
                <TheFool position={[0, 2.95, 0]}
                flipable={flipable}
                handleCardFlip={() => handleDeskFlip("desk-the-fool", "The Fool")}
                />
                <Strength position={[1, 2.95, 0]}
                flipable={flipable} 
                handleCardFlip={() => handleDeskFlip("desk-strength", "Strength")}
                />
                <TheMagician position={[-1, 2.95, 0]}
                flipable={flipable} 
                handleCardFlip={() => handleDeskFlip("desk-the-magician", "The Magician")}
                />

                {/* <axesHelper size={10} />
                <gridHelper /> */}

                <OrbitControls enabled={false} />
            </Suspense>
        </Canvas>
    );
}

export default Desk;
