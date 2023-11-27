import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { useFrame } from '@react-three/fiber';
import { Sphere } from "@react-three/drei";
import { Icosahedron } from '@react-three/drei';

import envMapSrc from "../../assets/cosmic/empty_warehouse_01.jpg";

const NUM_BOX_BREATHING = 1; //////
const TIME_PER_BREATH = 4000;
const TIME_PER_CYCLE = TIME_PER_BREATH * 4;
const delta = 0.005;

const BreathingSphere = ({ breathing, setBreathing, handleResumeDialog, completeMeditation }) => {
    const [animate, setAnimate] = useState("still"); // range: "still", "enlarge", "shrink"
    const ballRef = useRef();

    const hdrEquirect = new RGBELoader().load(
        envMapSrc,
        () => {
            hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
        }
    );

    useFrame(() => {
        ballRef.current.rotation.x += delta;
        if(animate === "enlarge") {
            ballRef.current.scale.x += delta;
            ballRef.current.scale.y += delta;
            ballRef.current.scale.z += delta;
        }
        if(animate === "shrink") {
            ballRef.current.scale.x -= delta;
            ballRef.current.scale.y -= delta;
            ballRef.current.scale.z -= delta;
        }
    });

    const animationLoop = () => {
        setTimeout(() => {
            console.log("set enlarge"); // test
            setAnimate("enlarge");
            setTimeout(() => {
                console.log("set still"); // test
                setAnimate("still");
                setTimeout(() => {
                    console.log("set shrink"); // test
                    setAnimate("shrink");
                    setTimeout(() => {
                        console.log("set still"); // test
                        setAnimate("still");
                    }, TIME_PER_BREATH);
                }, TIME_PER_BREATH);
            }, TIME_PER_BREATH);
        }, 0);
    }
    const handleScaling = () => {
        animationLoop();
        const breathingInterval = setInterval(animationLoop, TIME_PER_CYCLE);
        setTimeout(() => {
            clearInterval(breathingInterval);
        }, TIME_PER_CYCLE * (NUM_BOX_BREATHING - 1));
    };
    if(breathing) {
        handleScaling();
        setBreathing(false);
        // open dialog post-breathing
        setTimeout(() => {
            handleResumeDialog();
            completeMeditation();
        }, TIME_PER_CYCLE * (NUM_BOX_BREATHING));
    }

    return (
        <Sphere castShadow receiveShadow ref={ballRef} scale={1.8} position={[0, 0.5, 0]} onClick={handleScaling}>
            <meshPhysicalMaterial attach="material"
            roughness={0.1} transmission={1.5} thickness={0.5}
            envMap={hdrEquirect} />
        </Sphere>
    );
};

export default BreathingSphere;