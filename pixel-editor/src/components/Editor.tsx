import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Canvas from "./Canvas";
import "../App.css";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(10);
  const [selectedHeight, setSelectedHeight] = useState<number>(10);
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const [selectedFileFormat, setSelectedFileFormat] = useState<string>("png");
  const [didGenerateCanvas, setDidGenerateCanvas] = useState<boolean>(false);

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedWidth(parseInt(e.target.value));
    setDidGenerateCanvas(false);
  };

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedHeight(parseInt(e.target.value));
    setDidGenerateCanvas(false);
  };

  const handleColorChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedColor(e.target.value);
  };

  const handleOptionChange: ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFileFormat(e.target.value);
    setDidGenerateCanvas(false);
  };

  const generateCanvas: () => void = () => {
    setDidGenerateCanvas(didGenerateCanvas ? false : true);
  }

  return (
    <div className="Editor">
      <label>
        Width
        <input
          type="number"
          value={selectedWidth}
          onChange={handleWidthChange}
        />
      </label>

      <label>
        Height
        <input
          type="number"
          value={selectedHeight}
          onChange={handleHeightChange}
        />
      </label>

      <label>
        Color
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </label>

      {didGenerateCanvas ? <Canvas width={selectedWidth} height={selectedHeight} pixelColor={selectedColor}/> : null}

      <button onClick={generateCanvas}>Generate canvas</button>

      <label>
        Download drawing as
        <select defaultValue="image/png" onChange={handleOptionChange}>
          <option value="image/png">.png</option>
          <option value="image/jpeg">.jpeg</option>
        </select>
        <button onClick={() => console.log("e")}>Download</button>
      </label>
    </div>
  );
};

export default Editor;
