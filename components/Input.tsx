import { FC, InputHTMLAttributes } from "react";
import { Field } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  label,
  name,
  ...rest
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <Field name={name}>
        {({ form }: any) => {
          const { setFieldValue } = form;
          return (
            <input
              id={name}
              value={value ? value : ""}
              autoComplete="off"
              type={type}
              placeholder={placeholder}
              name={name}
              {...rest}
              onChange={(event) =>
                setFieldValue(name, event.target.value?.trim())
              }
            />
          );
        }}
      </Field>
    </div>
  );
};

export default Input;
