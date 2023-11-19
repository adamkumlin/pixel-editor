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

type OutlineStatus = "outlineOn" | "outlineOff";

type EraserStatus = "eraserEnabled" | "eraserDisabled";

const Toolbox: React.FC<ToolboxProps> = ({
  pixelClass,
  setPixelClass,
  recentColors,
  setEraserIsActive,
  eraserIsActive,
  setSelectedColor,
}) => {
  const [outlineClass, setOutlineClass] =
    useState<OutlineStatus>("outlineOn");

  const [eraserClass, setEraserClass] = useState<EraserStatus>(
    "eraserDisabled"
  );

  const handleOutlineChange = () => {
    setPixelClass(pixelClass == "Pixel" ? "Pixel showOutline" : "Pixel");
    setOutlineClass(
      outlineClass == "outlineOn"
        ? "outlineOff"
        : "outlineOn"
    );
  };

  const handleEraserChange = () => {
    setEraserIsActive(eraserIsActive ? false : true);
    setEraserClass(
      eraserClass == "eraserEnabled"
        ? "eraserDisabled"
        : "eraserEnabled"
    );
  };

  return (
    <div className="Toolbox">
      <div className="PrimaryTools">
      <Button className={outlineClass} onClick={handleOutlineChange} tooltipLabel={outlineClass === "outlineOn" ? "Hide outline" : "Show outline"}/>
      <Button className={eraserClass} onClick={handleEraserChange} tooltipLabel={eraserIsActive ? "Toggle off" : "Toggle on"}/>
      </div>
      <div className="ColorHistory">
        {recentColors.map((color, index) => (
          <Button
            buttonColor={{ backgroundColor: color }}
            key={index}
            onClick={() => setSelectedColor(color)}
            tooltipLabel={color}
          />
        ))}
      </div>
    </div>
  );
};

export default Toolbox;
