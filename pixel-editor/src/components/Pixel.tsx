import { useState } from "react";
import "../App.css";

type PixelProps = {
  color: string;
  isDrawing: boolean;
  pixelClass: string;
  size: number;
  setWasEdited: React.Dispatch<React.SetStateAction<boolean>>;
  wasEdited: boolean;
  downloadClicked: boolean;
};

const Pixel: React.FC<PixelProps> = ({
  color,
  isDrawing,
  pixelClass, size, setWasEdited, wasEdited, downloadClicked
}) => {
  const [pixelColor, setPixelColor] = useState({
    backgroundColor: "whitesmoke",
  });

  const pixelDimensions = {
    width: size,
    height: size
  };

  if (downloadClicked) {

  }
  const paintPixel = () => {
    setPixelColor({
      backgroundColor: color,
    });
    setWasEdited(true);
  };

  const draw = () => {
    if (isDrawing) {
      setPixelColor({
        backgroundColor: color,
      });
      setWasEdited(true);
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
