import "../App.css";
import Tooltip from "./Tooltip";
import { useEffect, useState } from "react";

type ButtonProps = {
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonColor?: any;
  className?: string;
  tooltipLabel?: string;
};

type VisibilityStatus = "none" | "block";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  buttonColor,
  className,
  tooltipLabel,
}) => {
  const [tooltipVisibilityStatus, setTooltipVisibilityStatus] =
    useState<VisibilityStatus>("none");

  return (
    <div className="Button">
      <button
        className={className}
        style={buttonColor}
        onClick={onClick}
        onMouseEnter={() => setTooltipVisibilityStatus("block")}
        onMouseLeave={() => setTooltipVisibilityStatus("none")}>
        {label}
      </button>
      <Tooltip
        label={tooltipLabel}
        visibilityStatus={tooltipVisibilityStatus}
      />
    </div>
  );
};

export default Button;
