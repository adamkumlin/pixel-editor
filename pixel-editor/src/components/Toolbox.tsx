import "../App.css";
import Button from "./Button";

type ToolboxProps = {
    pixelClass: string;
    setPixelClass: React.Dispatch<React.SetStateAction<string>>;
    clearCanvasPressed: boolean;
    setClearCanvasPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pixel: React.FC<ToolboxProps> = ({pixelClass, setPixelClass, clearCanvasPressed, setClearCanvasPressed}) => {

    const eraserColor: string = "#777777";

    const handlePixelOutlineChange: () => void = () => {
        if (pixelClass == "Pixel showOutline") {
            setPixelClass("Pixel");
        } else {
            setPixelClass("Pixel showOutline");
        }
    };

  return (
    <div className="Toolbox">
        <Button label="Toggle Outline" onClick={handlePixelOutlineChange}/>
        <Button label="Clear Canvas" onClick={() => setClearCanvasPressed(!clearCanvasPressed ? true : false)}/>
    </div>
  );
    
}

export default Pixel;