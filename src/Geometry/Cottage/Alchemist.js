import ModelViewer from "../../Models/ModelViewer";

export default function Alchemist({ scale = 5, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath="assets/cottage/animal_wizard.glb"
            scale={scale}
            position={position}
        />
    );
}