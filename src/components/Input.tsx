import { Input, Typography } from "antd";
import { FC } from "react";

interface CustomInputProp {
  label: string;
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
}

const CustomInput: FC<CustomInputProp> = ({
  label,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <div>
      <Typography className="text-base mb-0.5">{label}</Typography>
      <Input
        size="large"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default CustomInput;
