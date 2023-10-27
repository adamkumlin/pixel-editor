import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Canvas from "./Canvas";
import "../App.css";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(64);
  const [selectedHeight, setSelectedHeight] = useState<number>(64);
  const [selectedStroke, setSelectedStroke] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("#555555");

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedWidth(parseInt(e.target.value));
  }

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedHeight(parseInt(e.target.value));
  }

  const handleStrokeChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedStroke(parseInt(e.target.value));
  }

  const handleColorChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  }

  return (
    <div className="Editor">
      <input type="number" value={selectedWidth} onChange={handleWidthChange}/>
      <input type="number" value={selectedHeight} onChange={handleHeightChange}/>
      <input type="number" value={selectedStroke} onChange={handleStrokeChange}/>
      <input type="color" value={selectedColor} onChange={handleColorChange}/>

      <Canvas
        selectedWidth={selectedWidth}
        selectedHeight={selectedHeight}
        selectedStroke={selectedStroke}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default Editor;
