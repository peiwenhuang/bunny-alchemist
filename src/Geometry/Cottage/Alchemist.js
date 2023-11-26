import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/cottage/littlegriffons_hollandicus01.glb";

export default function Alchemist({ scale = 100, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}