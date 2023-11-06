import "../App.css";

type ButtonProps = {
    label?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonColor?: any;
}
const Button: React.FC<ButtonProps> = ({label, onClick, buttonColor}) => {

  return (
    <div className="Button">
      <button style={buttonColor} onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
