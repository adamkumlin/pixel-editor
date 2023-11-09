import { ChangeEventHandler } from "react";
import "../App.css";

type InputFieldProps = {
  label: string;
  type: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: any;
};
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  onBlur,
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
          onBlur={onBlur}
        />
      </label>
    </div>
  );
};

export default InputField;
