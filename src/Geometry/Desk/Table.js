import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/desk/wooden_table.glb";

export default function Table({ scale = 4, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}