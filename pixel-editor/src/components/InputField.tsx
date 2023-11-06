import { ChangeEventHandler } from "react";
import "../App.css";

type InputFieldProps = {
  label: string;
  type: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onMouseUp?: any;
};
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  onMouseUp,
}) => {
  return (
    <div className="InputField">
      <label>
        {label}
        <input
          className="Field"
          type={type}
          value={value}
          onChange={onChange}
          onMouseUp={onMouseUp}
        />
      </label>
    </div>
  );
};

export default InputField;
