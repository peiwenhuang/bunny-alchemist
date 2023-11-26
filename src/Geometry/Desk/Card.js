import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import gsap from 'gsap';

import backSide from '../../assets/desk/back.jpg';
import theFoolPath from '../../assets/desk/the-fool-tarot-card.jpg';
import strengthPath from '../../assets/desk/strength-tarot-card.jpg';
import theMagicianPath from '../../assets/desk/the-magician-tarot-card.jpg';

const Card = ({ position, frontTexture, flipable, handleCardFlip, rotation=[Math.PI / 2, 0, Math.PI] }) => {
    const ref = useRef();
    const [map1, map2] = useLoader(TextureLoader, [frontTexture, backSide]);

    const tl = new gsap.timeline({
        defaults: {duration: 0.6, delay: 0.01} 
    });

    const handleHoverIn = () => {
        if(flipable) {
            tl.to(ref.current.scale, {
                x: ref.current.scale.x * 1.1,
                y: ref.current.scale.y * 1.1,
                z: ref.current.scale.z * 1.1,
            });
        }
        
    }
    const handleHoverOut = () => {
        if(flipable) {
            tl.to(ref.current.scale, {
                x: ref.current.scale.x / 1.1,
                y: ref.current.scale.y / 1.1,
                z: ref.current.scale.z / 1.1,
            });
        }
        
    }
    const handleOnClick = () => {
        // card flip
        if(flipable) {
            tl.to(ref.current.position, {
                x: 0,
                y: 3.6,
                z: 0.5
            });
            tl.to(ref.current.rotation, {
                y: Math.PI
            });
            handleCardFlip();
        }
    }

    return (
      <mesh
        position={position}
        rotation={rotation}
        ref={ref}
        onClick={handleOnClick}
        onPointerEnter={handleHoverIn}
        onPointerLeave={handleHoverOut}
        className="tarot-card">
        <boxGeometry args={[0.398, 0.696, 0.01]} castShadow />
        <meshStandardMaterial attach="material-0" color="white" />
        <meshStandardMaterial attach="material-1" color="white" />
        <meshStandardMaterial attach="material-2" color="white" />
        <meshStandardMaterial attach="material-3" color="white" />
        <meshStandardMaterial attach="material-4" map={map1}  />
        <meshStandardMaterial attach="material-5" map={map2}  />
      </mesh>
    )
}

const TheFool = ({ position, flipable, handleCardFlip }) => {

    return (
        <Card
        position={position}
        frontTexture={theFoolPath}
        flipable={flipable} handleCardFlip={handleCardFlip}
        />
    );
}

const Strength = ({ position, flipable, handleCardFlip }) => {
    return (
        <Card
        position={position}
        frontTexture={strengthPath}
        flipable={flipable} handleCardFlip={handleCardFlip}
        />
    );
}

const TheMagician = ({ position, flipable, handleCardFlip }) => {
    return (
        <Card
        position={position}
        frontTexture={theMagicianPath}
        flipable={flipable} handleCardFlip={handleCardFlip}
        />
    );
}

export { TheFool, Strength, TheMagician };