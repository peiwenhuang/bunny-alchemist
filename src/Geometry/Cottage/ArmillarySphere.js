import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/cottage/armillary_sphere.glb";

export default function ArmillarySphere({ scale = 0.05, position = [0, 6, 0] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}