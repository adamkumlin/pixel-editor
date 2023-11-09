import "../App.css";
import Button from "./Button";

type ToolboxProps = {
    pixelClass: string;
    setPixelClass: React.Dispatch<React.SetStateAction<string>>;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
    recentColors: string[];
}

const Pixel: React.FC<ToolboxProps> = ({pixelClass, setPixelClass, setSelectedColor, recentColors}) => {

    const eraserColor: string = "#00000000";

  return (
    <div className="Toolbox">
        <Button onClick={() => setPixelClass(pixelClass == "Pixel" ? "Pixel showOutline" : "Pixel")}/>
        <Button className="Eraser" onClick={() => setSelectedColor(eraserColor)}/>
        <div>{recentColors.map((color, index) => (
            <Button buttonColor={{backgroundColor: color}} key={index} onClick={() => setSelectedColor(color)}/>
        ))}</div>
    </div>
  );
    
}

export default Pixel;