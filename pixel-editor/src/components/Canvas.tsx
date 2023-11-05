import { forwardRef, useState, ForwardedRef } from "react";
import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
  pixelClass: string;
  pixelSize: number;
};

const Canvas: React.FC<CanvasProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement | null>) => {
    const { width, height, pixelColor, pixelClass, pixelSize } = props;

    const [isDrawing, setIsDrawing] = useState<boolean>(false);

    const elements: any = new Array(width * height).fill(
      <Pixel color={pixelColor} isDrawing={isDrawing} pixelClass={pixelClass} size={pixelSize}/>
    );

    return (
      <div className="CanvasContainer">
        <div
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
          style={{
            gridTemplateRows: "repeat(" + height + ", " + pixelSize + "px)",
            gridTemplateColumns: "repeat(" + width + ", " + pixelSize + "px)",
          }}
          className="Canvas"
          ref={ref}
        >
          {elements}
        </div>
      </div>
    );
  }
);

export default Canvas;
