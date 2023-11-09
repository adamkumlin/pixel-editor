import { useState } from "react";
import "../App.css";
import Button from "./Button";

type ToolboxProps = {
  pixelClass: string;
  setPixelClass: React.Dispatch<React.SetStateAction<string>>;
  recentColors: string[];
  setEraserIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  eraserIsActive: boolean;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
};

type OutlineStatus = "Outline outlineOn" | "Outline outlineOff";

type EraserStatus = "Eraser eraserEnabled" | "Eraser eraserDisabled";

const Pixel: React.FC<ToolboxProps> = ({
  pixelClass,
  setPixelClass,
  recentColors,
  setEraserIsActive,
  eraserIsActive,
  setSelectedColor,
}) => {
  const [outlineClass, setOutlineClass] =
    useState<OutlineStatus>("Outline outlineOn");

  const [eraserClass, setEraserClass] = useState<EraserStatus>(
    "Eraser eraserDisabled"
  );

  const handleOutlineChange = () => {
    setPixelClass(pixelClass == "Pixel" ? "Pixel showOutline" : "Pixel");
    setOutlineClass(
      outlineClass == "Outline outlineOn"
        ? "Outline outlineOff"
        : "Outline outlineOn"
    );
  };

  const handleEraserChange = () => {
    setEraserIsActive(eraserIsActive ? false : true);
    setEraserClass(
      eraserClass == "Eraser eraserEnabled"
        ? "Eraser eraserDisabled"
        : "Eraser eraserEnabled"
    );
  };

  return (
    <div className="Toolbox">
      <Button className={outlineClass} onClick={handleOutlineChange} />
      <Button className={eraserClass} onClick={handleEraserChange} />
      <div className="ColorHistory">
        {recentColors.map((color, index) => (
          <Button
            buttonColor={{ backgroundColor: color }}
            key={index}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default Pixel;
