import { useState } from "react";
import "../App.css";

type PixelProps = {
    color: string;
    isDrawing: boolean;
}

const Pixel: React.FC<PixelProps> = ({color, isDrawing}) => {

    const [pixelStyle, setPixelStyle] = useState<any>({
        backgroundColor: "whitesmoke"
    });

    const paintPixel = () => {
        setPixelStyle({backgroundColor: color});
    }

    const startDrawing = () => {
        if (isDrawing) {
            console.log("yaa");
            setPixelStyle({backgroundColor: color});
        }
    }



  return <div style={pixelStyle} draggable="false" onMouseOver={startDrawing} onClick={paintPixel} className="Pixel"></div>;
    
}

export default Pixel;