import ModelViewer from "../../Models/ModelViewer";

export default function AlchemyTable({ scale = 1, position = [0, 0, 0] }) {
    return (
        <ModelViewer
            modelpath="assets/cottage/alchemy_table.glb"
            scale={scale}
            position={position}
        />
    );
}