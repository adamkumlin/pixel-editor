import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import Canvas from "./Canvas";
import InputField from "./InputField";
import Toolbox from "./Toolbox";
import "../App.css";

type FileFormat = "png" | "jpeg";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(10);
  const [selectedHeight, setSelectedHeight] = useState<number>(10);
  const [selectedColor, setSelectedColor] = useState<string>("#777777");
  const [selectedFileFormat, setSelectedFileFormat] =
    useState<FileFormat>("png");
  const [pixelClass, setPixelClass] = useState("Pixel showOutline");

  const canvasRef = useRef(null);

  const generatePNG = () => {
    if (canvasRef.current) {
      toPng(canvasRef.current, { cacheBust: false })
        .then((dataURL) => {
          const link = document.createElement("a");
          link.download = "pixel-art.png";
          link.href = dataURL;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="Editor">
      <InputField
        label="Width"
        type="number"
        value={selectedWidth}
        onChange={(e) => setSelectedWidth(parseInt(e.target.value))}
      />

      <InputField
        label="Height"
        type="number"
        value={selectedHeight}
        onChange={(e) => setSelectedHeight(parseInt(e.target.value))}
      />

      <InputField
        label="Color"
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      <Toolbox pixelClass={pixelClass} setPixelClass={setPixelClass} />

      <Canvas
        width={selectedWidth}
        height={selectedHeight}
        pixelColor={selectedColor}
        pixelClass={pixelClass}
        ref={canvasRef}
      />

      <label>
        Download drawing as
        <select
          defaultValue="image/png"
          onChange={() =>
            setSelectedFileFormat(selectedFileFormat == "png" ? "jpeg" : "png")
          }
        >
          <option value="image/png">.png</option>
          <option value="image/jpeg">.jpeg</option>
        </select>
        <button onClick={generatePNG}>Download</button>
      </label>
    </div>
  );
};

export default Editor;
