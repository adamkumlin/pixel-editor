import { useState } from "react";
import "../App.css";

type PixelProps = {
  color: string;
  isDrawing: boolean;
  pixelClass: string;
};

const Pixel: React.FC<PixelProps> = ({
  color,
  isDrawing,
  pixelClass,
}) => {
  const [pixelColor, setPixelColor] = useState({
    backgroundColor: "whitesmoke",
  });

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
      style={pixelColor}
      onMouseOver={draw}
      onClick={paintPixel}
      className={pixelClass}
    ></div>
  );
};

export default Pixel;