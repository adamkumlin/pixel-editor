import "../App.css";

type ButtonProps = {
    label?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonColor?: any;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({label, onClick, buttonColor, className}) => {

  return (
    <div className="Button">
      <button className={className} style={buttonColor} onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
