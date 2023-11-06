import { ChangeEventHandler } from "react";
import "../App.css";

type InputFieldProps = {
  label: string;
  type: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
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
        />
      </label>
    </div>
  );
};

export default InputField;
