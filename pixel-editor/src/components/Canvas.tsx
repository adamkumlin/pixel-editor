import { useState } from "react";
import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
};

const Canvas: React.FC<CanvasProps> = ({ width, height, pixelColor }) => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const elements: any = new Array(width * height).fill(
    <Pixel color={pixelColor} isDrawing={isDrawing}/>
  );

  const draw = () => {
    setIsDrawing(true);
    console.log("yo");
  };

  const draw1 = () => {
    setIsDrawing(false);
    console.log("yi");
  };

  return (
    <div
      onMouseDown={draw}
      onMouseUp={draw1}
      draggable="false"
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
