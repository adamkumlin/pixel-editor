import {
  ChangeEvent,
  ChangeEventHandler,
  useState,
  useRef,
  createElement,
} from "react";
import Canvas from "./Canvas";
import "../App.css";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<string>("64");
  const [selectedHeight, setSelectedHeight] = useState<string>("64");
  const [selectedStroke, setSelectedStroke] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("#555555");
  const [selectedFileFormat, setSelectedFileFormat] =
    useState<string>("png");

  const canvasRef = useRef(null);

  const handleWidthChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedWidth(e.target.value);
  };

  const handleHeightChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedHeight(e.target.value);
  };

  const handleStrokeChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedStroke(parseInt(e.target.value));
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
  };

  const downloadDrawing: () => void = () => {
    canvasRef.current.exportImage(selectedFileFormat).then(data => {
      console.log(data);
    }).catch(e => {
      console.log(e);
    })
  };

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
        Stroke width
        <input
          type="number"
          value={selectedStroke}
          onChange={handleStrokeChange}
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

      <Canvas
        ref={canvasRef}
        selectedWidth={selectedWidth}
        selectedHeight={selectedHeight}
        selectedStroke={selectedStroke}
        selectedColor={selectedColor}
      />

      <label>
        Download drawing as:
        <select defaultValue="image/png" onChange={handleOptionChange}>
          <option value="image/png">.png</option>
          <option value="image/jpeg">.jpeg</option>
        </select>
      </label>
      <button onClick={downloadDrawing}>Download</button>
    </div>
  );
};

export default Editor;
