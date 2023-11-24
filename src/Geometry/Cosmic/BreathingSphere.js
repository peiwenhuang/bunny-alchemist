import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from "@react-three/drei";

const NUM_BOX_BREATHING = 1; //////
const TIME_PER_BREATH = 4000;
const TIME_PER_CYCLE = TIME_PER_BREATH * 4;

const BreathingSphere = ({ breathing, setBreathing, handleResumeDialog, completeMeditation }) => {
    const [animate, setAnimate] = useState("still"); // range: "still", "enlarge", "shrink"
    const ballRef = useRef();

    useFrame(() => {
        ballRef.current.rotation.x += 0.005;
        if(animate === "enlarge") {
            ballRef.current.scale.x += 0.005;
            ballRef.current.scale.y += 0.005;
            ballRef.current.scale.z += 0.005;
        }
        if(animate === "shrink") {
            ballRef.current.scale.x -= 0.005;
            ballRef.current.scale.y -= 0.005;
            ballRef.current.scale.z -= 0.005;
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
        }, TIME_PER_CYCLE * NUM_BOX_BREATHING);
    }

    return (
        <Sphere castShadow receiveShadow ref={ballRef} position={[0, 0.5, 0]} onClick={handleScaling}>
            <meshStandardMaterial attach="material" color="white" />
        </Sphere>
    );
};

export default BreathingSphere;