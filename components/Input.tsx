import { FC, InputHTMLAttributes } from "react";
import { Field, FieldProps, ErrorMessage } from "formik";
import TextError from "./TextError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
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
        {({ form }: FieldProps) => {
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
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Input;
