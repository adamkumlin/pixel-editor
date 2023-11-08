import { useState, useRef, useEffect } from "react";
import { toJpeg, toPng } from "html-to-image";
import Canvas from "./Canvas";
import InputField from "./InputField";
import Toolbox from "./Toolbox";
import Button from "./Button";
import "../App.css";

type FileFormat = "png" | "jpeg";

const Editor: React.FC = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(10);
  const [selectedHeight, setSelectedHeight] = useState<number>(10);
  const [selectedColor, setSelectedColor] = useState<string>("#777777");
  const [selectedFileFormat, setSelectedFileFormat] =
    useState<FileFormat>("png");
  const [pixelClass, setPixelClass] = useState("Pixel showOutline notEdited");
  const [pixelSize, setPixelSize] = useState<number>(30);
  const [drawCanvas, setDrawCanvas] = useState<boolean>(false);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [wasEdited, setWasEdited] = useState<boolean>(false);
  const [downloadClicked, setDownloadClicked] = useState<boolean>(false);

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
  }

  const updateRecentColors = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecentColors(current => [...current, e.target.value]);
  }

  const generateImage = () => {

    setDownloadClicked(true);

    if (selectedFileFormat === "png") {
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
    if (selectedWidth > 70 || selectedHeight > 70) {
      setPixelSize(5);
    } else if (selectedWidth > 45 || selectedHeight > 45) {
      setPixelSize(15);
    } else if (selectedWidth <= 45 || selectedHeight <= 45) {
      setPixelSize(30);
    }
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
        onMouseUp={updateRecentColors}
      />

      {selectedWidth > 45 || selectedHeight > 45 ? (
        <Button
          label="Draw Canvas"
          onClick={() => setDrawCanvas(drawCanvas ? false : true)}
        />
      ) : null}

      <Toolbox pixelClass={pixelClass} setPixelClass={setPixelClass} setSelectedColor={setSelectedColor} recentColors={recentColors}/>

      {drawCanvas || (selectedWidth <= 45 && selectedHeight <= 45) ? (
        <Canvas
          width={selectedWidth}
          height={selectedHeight}
          pixelColor={selectedColor}
          pixelClass={pixelClass}
          pixelSize={pixelSize}
          setWasEdited={setWasEdited}
          wasEdited={wasEdited}
          downloadClicked={downloadClicked}
          ref={canvasRef}
        />
      ) : null}

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
        <Button label="Download" onClick={generateImage} />
      </label>
    </div>
  );
};

export default Editor;
