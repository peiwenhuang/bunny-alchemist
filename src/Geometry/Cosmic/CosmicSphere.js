import { useRef, useFrame } from "react";
import ModelViewer from "../../Models/ModelViewer";

export default function CosmicSphere({ scale = 10, position = [0, 0, 0] }) {
    
    return (
        <ModelViewer
            modelpath="assets/cosmic/space.glb"
            scale={scale}
            position={position}
            rotate={true}
        />
    );
}