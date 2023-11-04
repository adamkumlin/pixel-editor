import "../App.css";
import Button from "./Button";

type ToolboxProps = {
    pixelClass: string;
    setPixelClass: React.Dispatch<React.SetStateAction<string>>;
}

const Pixel: React.FC<ToolboxProps> = ({pixelClass, setPixelClass}) => {

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
    </div>
  );
    
}

export default Pixel;