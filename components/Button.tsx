import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "submit" | "button";
}
const Button: FC<ButtonProps> = ({ text, onClick, type, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      {text}
    </button>
  );
};

export default Button;
