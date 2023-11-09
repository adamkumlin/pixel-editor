import { useState } from "react";
import "../App.css";

type PixelProps = {
  color: string;
  isDrawing: boolean;
  pixelClass: string;
  size: number;
};

const Pixel: React.FC<PixelProps> = ({
  color,
  isDrawing,
  pixelClass, size,
}) => {
  const [pixelColor, setPixelColor] = useState({
    backgroundColor: "transparent"
  });

  const pixelDimensions = {
    width: size,
    height: size
  };

  const paintPixel = () => {
    setPixelColor({
      backgroundColor: color,
    });
  };

  const draw = () => {
    if (isDrawing) {
      setPixelColor({
        backgroundColor: color,
      });
    }
  };

  return (
    <div
      
      style={{...pixelColor, ...pixelDimensions}}
      onMouseOver={draw}
      onClick={paintPixel}
      className={pixelClass}
    ></div>
  );
};

export default Pixel;
