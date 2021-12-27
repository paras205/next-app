import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "submit" | "button";
  loading?: boolean;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, type, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  loading: false,
};

export default Button;
