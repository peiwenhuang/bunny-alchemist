import ModelViewer from "../../Models/ModelViewer";
import model from "../../assets/cottage/alchemy_table.glb";

export default function AlchemyTable({ scale = 1, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath={model}
            scale={scale}
            position={position}
        />
    );
}