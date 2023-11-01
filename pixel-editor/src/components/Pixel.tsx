import { useState } from "react";
import "../App.css";

type PixelProps = {
    color: string;
}

const Pixel: React.FC<PixelProps> = ({color}) => {

    const [pixelStyle, setPixelStyle] = useState<any>({
        backgroundColor: "whitesmoke"
})

    const paintPixel = () => {
        setPixelStyle({backgroundColor: color});
    }

  return (
    <div style={pixelStyle} onClick={paintPixel} className="Pixel"></div>
    )
}

export default Pixel;