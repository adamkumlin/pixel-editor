import { useState } from "react";
import "../App.css";
import Button from "./Button";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

type ToolboxProps = {
  pixelClass: string;
  setPixelClass: React.Dispatch<React.SetStateAction<string>>;
  recentColors: string[];
  setEraserIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  eraserIsActive: boolean;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setPixelSize: React.Dispatch<React.SetStateAction<number>>;
  pixelSize: number;
};

type OutlineStatus = "Outline outlineOn" | "Outline outlineOff";

type EraserStatus = "Eraser eraserEnabled" | "Eraser eraserDisabled";

const Toolbox: React.FC<ToolboxProps> = ({
  pixelClass,
  setPixelClass,
  recentColors,
  setEraserIsActive,
  eraserIsActive,
  setSelectedColor,
  setPixelSize,
  pixelSize,
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

  const handlePixelSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPixelSize(parseInt(e.target.value));
  };

  return (
    <div className="Toolbox">
      <Button className={outlineClass} onClick={handleOutlineChange} />
      <Button className={eraserClass} onClick={handleEraserChange} />
      <InputField
        label="Pixel Size"
        type="range"
        value={pixelSize}
        onChange={(e) => handlePixelSizeChange(e)}
      />
      <div className="ColorHistory">
        {recentColors.length > 0 ? <p>Color History:</p> : null}
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

export default Toolbox;
