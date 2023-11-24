import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/cottage/animal_wizard.glb";

export default function Alchemist({ scale = 14, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}