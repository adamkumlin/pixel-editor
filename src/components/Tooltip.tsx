import "../App.css";

type TooltipProps = {
  label: string | undefined;
  visibilityStatus: "none" | "block";
};

const Tooltip: React.FC<TooltipProps> = ({ label, visibilityStatus}) => {

  return <div className="Tooltip" style={{display: visibilityStatus}}>{label}</div>;
};

export default Tooltip;
