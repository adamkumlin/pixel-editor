import { useState } from "react";
import "../App.css";

type TooltipProps = {
  label: string;
};

type VisibilityStatus = "visible" | "hidden";

const Tooltip: React.FC<TooltipProps> = ({ label }) => {

    const [visibilityStatus, setVisibilityStatus] = useState<VisibilityStatus>("hidden");

  return <div className="Tooltip" onMouseEnter={() => setVisibilityStatus("visible")} onMouseLeave={() => setVisibilityStatus("hidden")} style={{visibility: visibilityStatus}}>{label}</div>;
};

export default Tooltip;
