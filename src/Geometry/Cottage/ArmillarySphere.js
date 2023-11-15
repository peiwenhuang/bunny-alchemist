import ModelViewer from "../../Models/ModelViewer";

export default function ArmillarySphere({ scale = 0.05, position = [0, 6, 0] }) {
    return (
        <ModelViewer
            modelpath="assets/cottage/armillary_sphere.glb"
            scale={scale}
            position={position}
        />
    );
}