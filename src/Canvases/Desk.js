import React, { useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Table from '../Geometry/Desk/Table';
import { TheFool, Strength, TheMagician } from '../Geometry/Desk/Card';

// TODO: randomize cards

const TABLET = 1024;
const MOBILE = 430;

const isTablet = () => {
    return document.documentElement.clientWidth <= TABLET;
};
const isMobile = () => {
    return document.documentElement.clientWidth <= MOBILE;
}

function Desk({ handleCardFlip }) {
    const [flipable, setFlipable] = useState(true);
    const handleDeskFlip = (dialogScene, energizer) => {
        setFlipable(false);
        setTimeout(() => handleCardFlip(dialogScene, energizer), 1000);
    }

    const cardSpacing = () => {
        // checking breakpoints
        if (isTablet()) { 
            if (isMobile()) { 
                return 0.45;
            }
            return 0.8;
        }
        return 1;
    }
    const tableScale = () => {
        if (isTablet()) {
            return 3.5;
        }
        return 4;
    }
    const tableHeight = () => {
        if (isTablet()) { 
            return 2.6;
        }
        return 2.95;
    }
    const cardZ = () => {
        if (isTablet()) { 
            if (isMobile()) { 
                return 0;
            }
            return 0.05;
        }
        return 0.2;
    }

    return (
        <Canvas
        camera={{ fov: 80, position: [0, 4.5, 0.8]}}
        shadows>
            <Suspense fallback={null}>
                <ambientLight intensity={5} />
                <Table scale={tableScale()} />
                <TheFool position={[0, tableHeight(), cardZ()]}
                flipable={flipable}
                handleCardFlip={() => handleDeskFlip("desk-the-fool", "The Fool")}
                />
                <Strength position={[cardSpacing(), tableHeight(), cardZ()]}
                flipable={flipable} 
                handleCardFlip={() => handleDeskFlip("desk-strength", "Strength")}
                />
                <TheMagician position={[-(cardSpacing()), tableHeight(), cardZ()]}
                flipable={flipable} 
                handleCardFlip={() => handleDeskFlip("desk-the-magician", "The Magician")}
                />

                <OrbitControls enabled={false} />
            </Suspense>
        </Canvas>
    );
}

export default Desk;
export { isTablet, isMobile };
