import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
};

const Canvas: React.FC<CanvasProps> = ({ width, height, pixelColor }) => {
    
  const elements: any = new Array(width * height).fill(<Pixel color={pixelColor}/>);

  return (
    <div
      style={{
        gridTemplateRows: "repeat(" + height + ", 10px)",
        gridTemplateColumns: "repeat(" + width + ", 10px)",
      }}
      className="Canvas"
    >
      {elements}
    </div>
  );
};

export default Canvas;
