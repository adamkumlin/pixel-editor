import { forwardRef, useState, ForwardedRef } from "react";
import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
  pixelClass: string;
  pixelSize: number;
  setWasEdited: React.Dispatch<React.SetStateAction<boolean>>;
  wasEdited: boolean;
  downloadClicked: boolean;
};

const Canvas: React.FC<CanvasProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement | null>) => {
    const {
      width,
      height,
      pixelColor,
      pixelClass,
      pixelSize, setWasEdited, wasEdited, downloadClicked
    } = props;

    const [isDrawing, setIsDrawing] = useState<boolean>(false);

    let elements: any = new Array(width * height).fill(null).map((_, index) => (
      <Pixel
        key={index}
        color={pixelColor}
        isDrawing={isDrawing}
        pixelClass={pixelClass}
        size={pixelSize}
        setWasEdited={setWasEdited}
        downloadClicked={downloadClicked}
        wasEdited={wasEdited}
      />
    ));

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
