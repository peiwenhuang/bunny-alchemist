import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Sphere } from "@react-three/drei";

const NUM_BOX_BREATHING = 1; //////
const TIME_PER_BREATH = 4000;
const TIME_PER_CYCLE = TIME_PER_BREATH * 4;
const delta = 0.003;
const DELAY_BEFORE_BREATH = 1000;

const BreathingSphere = ({ breathing, setBreathing, handleResumeDialog, completeMeditation }) => {
    const [animate, setAnimate] = useState("still"); // range: "still", "enlarge", "shrink"
    const ballRef = useRef();

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

    useEffect(() => {
        if(breathing) {
            setTimeout(() => {
                handleScaling();
                // open dialog post-breathing
                setTimeout(() => {
                    handleResumeDialog();
                    completeMeditation();
                    setBreathing(false);
                }, TIME_PER_CYCLE * NUM_BOX_BREATHING);
            }, DELAY_BEFORE_BREATH);
        }
    }, [breathing]);

    return (
        <Sphere castShadow receiveShadow ref={ballRef} scale={1.2} position={[0, 0.5, 0]}>
            <meshPhysicalMaterial attach="material"
            roughness={0.1} transmission={1.5} thickness={0.5}/>
        </Sphere>
    );
};

export default BreathingSphere;
export { NUM_BOX_BREATHING, TIME_PER_BREATH, TIME_PER_CYCLE, DELAY_BEFORE_BREATH };