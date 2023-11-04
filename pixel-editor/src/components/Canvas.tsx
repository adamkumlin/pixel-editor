import { RefObject, forwardRef, useState, ForwardedRef} from "react";
import "../App.css";
import Pixel from "./Pixel";

type CanvasProps = {
  width: number;
  height: number;
  pixelColor: string;
  pixelClass: string;
};

const Canvas: React.FC<CanvasProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement | null>) => {
  const { width, height, pixelColor, pixelClass } = props;

  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const elements: any = new Array(width * height).fill(
    <Pixel color={pixelColor} isDrawing={isDrawing} pixelClass={pixelClass} />
  );

  return (
    <div
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
      style={{
        gridTemplateRows: "repeat(" + height + ", 10px)",
        gridTemplateColumns: "repeat(" + width + ", 10px)",
      }}
      className="Canvas"
      ref={ref as RefObject<HTMLDivElement>}
    >
      {elements}
    </div>
  );
});

export default Canvas;
