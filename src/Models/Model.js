import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { hover } from '@testing-library/user-event/dist/hover';

const GltfModel = ({ modelpath, scale = 1, position = [0, 0, 0], rotate = false} ) => {
    const ref = useRef();
    
    const gltf = useLoader(GLTFLoader, modelpath);
    gltf.scene.traverse(function(node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if(rotate) {
            ref.current.rotation.y += 0.003;
        }
    })

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={hovered ? scale * 1.01 : scale}
            position={position}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        />
    );
}
export default GltfModel;