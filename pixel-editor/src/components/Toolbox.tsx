import "../App.css";
import Button from "./Button";

type ToolboxProps = {
    pixelClass: string;
    setPixelClass: React.Dispatch<React.SetStateAction<string>>;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
    recentColors: string[];
}

const Pixel: React.FC<ToolboxProps> = ({pixelClass, setPixelClass, setSelectedColor, recentColors}) => {

    const eraserColor: string = "#FFFFFF";

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
        <Button label="Eraser" onClick={() => setSelectedColor(eraserColor)}/>
        <div>{recentColors.map((color, index) => (
            <Button buttonColor={{backgroundColor: color}} key={index} onClick={() => setSelectedColor(color)}/>
        ))}</div>
    </div>
  );
    
}

export default Pixel;