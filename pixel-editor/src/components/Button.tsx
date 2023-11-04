import "../App.css";

type ButtonProps = {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({label, onClick}) => {

  return (
    <div className="Button">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
