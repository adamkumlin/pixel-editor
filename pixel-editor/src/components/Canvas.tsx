import "../App.css";

type CanvasProps = {
    ref: React.MutableRefObject<null>;
    selectedWidth: string;
    selectedHeight: string;
    selectedStroke: number;
    selectedColor: string;
}

const Canvas: React.FC<CanvasProps> = ({selectedWidth, selectedHeight, selectedStroke, selectedColor}) => {

  return (
    <div className="Canvas">
      <ReactSketchCanvas width={selectedWidth} height={selectedHeight} strokeWidth={selectedStroke} strokeColor={selectedColor}/>
    </div>
  )
}

export default Canvas;