import { forwardRef, useState, ForwardedRef } from "react";
import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
  pixelClass: string;
  pixelSize: number;
  clearCanvasPressed: boolean;
  setClearCanvasPressed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Canvas: React.FC<CanvasProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement | null>) => {
    const {
      width,
      height,
      pixelColor,
      pixelClass,
      pixelSize,
      clearCanvasPressed, setClearCanvasPressed
    } = props;

    const [isDrawing, setIsDrawing] = useState<boolean>(false);

    let elements: any = new Array(width * height).fill(null).map((_, index) => (
      <Pixel
        key={index}
        color={pixelColor}
        isDrawing={isDrawing}
        pixelClass={pixelClass}
        size={pixelSize}
      />
    ));
    

    if (clearCanvasPressed) {

      elements = [];
      console.log(elements[0])
      elements = new Array(width * height).fill(null).map((_, index) => (
        <Pixel
          key={index}
          color="#FFFFFF"
          isDrawing={isDrawing}
          pixelClass={pixelClass}
          size={pixelSize}
        />
      ));

      setClearCanvasPressed(false);
    }

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
