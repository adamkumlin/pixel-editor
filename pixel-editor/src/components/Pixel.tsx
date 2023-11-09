import { useState } from "react";
import "../App.css";

type PixelProps = {
  color: string;
  isDrawing: boolean;
  pixelClass: string;
  size: number;
  eraserIsActive: boolean;
};

const Pixel: React.FC<PixelProps> = ({
  color,
  isDrawing,
  pixelClass,
  size,
  eraserIsActive,
}) => {
  const [pixelColor, setPixelColor] = useState({
    backgroundColor: "transparent",
  });

  const pixelDimensions = {
    width: size,
    height: size,
  };

  const paintPixel = () => {
    if (eraserIsActive) {
      setPixelColor({
        backgroundColor: "#00000000",
      });
    } else {
      setPixelColor({
        backgroundColor: color,
      });
    }
  };

  const draw = () => {
    if (isDrawing) {
      if (eraserIsActive) {
        setPixelColor({
          backgroundColor: "#00000000",
        });
      } else {
        setPixelColor({
          backgroundColor: color,
        });
      }
    }
  };

  return (
    <div
      style={{ ...pixelColor, ...pixelDimensions }}
      onMouseOver={draw}
      onClick={paintPixel}
      className={pixelClass}
    ></div>
  );
};

export default Pixel;
