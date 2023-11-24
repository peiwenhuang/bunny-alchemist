import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function World({ texturePath, args = [500, 60, 40], position = null }) {
    const texture = useLoader(TextureLoader, texturePath);
    
    return (
        <mesh>
            <sphereGeometry args={args} position={position} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    );
}