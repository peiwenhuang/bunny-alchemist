import { useRef, useFrame } from "react";
import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/cosmic/space.glb";

export default function CosmicSphere({ scale = 10, position = [0, 0, 0] }) {
    
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
            rotate={true}
        />
    );
}