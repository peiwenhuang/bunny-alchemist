import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/desk/tarot_cards_01.glb";

export default function Tarots({ scale = 30, position = [20, 40, 15] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}