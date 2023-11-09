import { useState, useRef, useEffect } from "react";
import { toJpeg, toPng } from "html-to-image";
import Canvas from "./Canvas";
import InputField from "./InputField";
import Toolbox from "./Toolbox";
import Button from "./Button";
import "../App.css";

type FileFormat = "png" | "jpeg";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(16);
  const [selectedHeight, setSelectedHeight] = useState<number>(16);
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const [selectedFileFormat, setSelectedFileFormat] =
    useState<FileFormat>("png");
  const [pixelClass, setPixelClass] = useState("Pixel showOutline");
  const [pixelSize, setPixelSize] = useState<number | null>(null);
  const [drawCanvas, setDrawCanvas] = useState<boolean>(false);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [eraserIsActive, setEraserIsActive] = useState<boolean>(false);

  const canvasRef = useRef(null);

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrawCanvas(false);
    setSelectedWidth(parseInt(e.target.value));
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrawCanvas(false);
    setSelectedHeight(parseInt(e.target.value));
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const updateRecentColors = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (recentColors.includes(e.target.value)) {
      return;
    }
    setRecentColors((current) => [...current, e.target.value]);
  };

  const generateImage = () => {
    setPixelClass("Pixel");

    if (selectedFileFormat === "png") {
      if (canvasRef.current) {
        toPng(canvasRef.current, { cacheBust: false, /*width: selectedWidth, height: selectedHeight*/ })
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
    } else {
      if (canvasRef.current) {
        toJpeg(canvasRef.current, { cacheBust: false })
          .then((dataURL) => {
            const link = document.createElement("a");
            link.download = "pixel-art.jpg";
            link.href = dataURL;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  useEffect(() => {
    let pixelWidth: number = 640 / selectedWidth;
    
    let pixelHeight: number = 640 / selectedHeight;
    
    let pixelArea = (pixelWidth + pixelHeight) / 2;

    setPixelSize(pixelArea);

    /*if (totalPixelAmount >= 10_000) {
      setPixelSize(6);
    } else if (totalPixelAmount >= 4096) {
      setPixelSize(11);
    } else if (totalPixelAmount >= 1024) {
      setPixelSize(30);
    } else if (totalPixelAmount >= 256) {
      setPixelSize(41);
    } else if (totalPixelAmount >= 64) {
      setPixelSize(30);
    }*/
  }, [selectedWidth, selectedHeight]);

  return (
    <div className="Editor">
      <InputField
        label="Width"
        type="number"
        value={selectedWidth}
        onChange={(e) => handleChangeWidth(e)}
      />

      <InputField
        label="Height"
        type="number"
        value={selectedHeight}
        onChange={(e) => handleChangeHeight(e)}
      />

      <InputField
        label="Color"
        type="color"
        value={selectedColor}
        onChange={handleChangeColor}
        onBlur={updateRecentColors}
      />

      {selectedWidth > 45 || selectedHeight > 45 ? (
        <Button
          label="Draw Canvas"
          onClick={() => setDrawCanvas(drawCanvas ? false : true)}
        />
      ) : null}

      <Toolbox
        setSelectedColor={setSelectedColor}
        pixelClass={pixelClass}
        setPixelClass={setPixelClass}
        setEraserIsActive={setEraserIsActive}
        eraserIsActive={eraserIsActive}
        recentColors={recentColors}
      />

      {drawCanvas || (selectedWidth <= 45 && selectedHeight <= 45) ? (
        <Canvas
          width={selectedWidth}
          height={selectedHeight}
          pixelColor={selectedColor}
          pixelClass={pixelClass}
          pixelSize={pixelSize}
          eraserIsActive={eraserIsActive}
          ref={canvasRef}
        />
      ) : null}

      <div className="DownloadField">
        <label>
          Download as
          <select
            defaultValue="image/png"
            onChange={() =>
              setSelectedFileFormat(
                selectedFileFormat == "png" ? "jpeg" : "png"
              )
            }
          >
            <option value="image/png">.png</option>
            <option value="image/jpeg">.jpeg</option>
          </select>
        </label>
      </div>
      <Button label="Download" onClick={generateImage} />
    </div>
  );
};

export default Editor;
