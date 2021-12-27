import type { NextPage } from "next";
import { Formik, Form, FormikHelpers, FormikState } from "formik";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import { IRegister } from "../types/auth";
import { RegistrationSchema } from "../schema/registerSchema";

const Register: NextPage = () => {
  const initialValues: IRegister = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };
  const onSubmit = async (
    values: IRegister,
    helpers: FormikHelpers<IRegister>
  ) => {
    console.log(values, helpers);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }: FormikState<IRegister>) => (
        <Form>
          <Input
            name="name"
            value={values.name}
            type="text"
            placeholder="Enter your name"
            label="Enter your name"
          />
          <Input
            name="email"
            value={values.email}
            type="email"
            placeholder="Enter your email"
            label="Enter your email"
          />
          <Input
            name="password"
            value={values.password}
            type="password"
            placeholder="Enter your Password"
            label="Enter your Password"
          />
          <Input
            name="confirm"
            value={values.confirm}
            type="password"
            placeholder="Re-enter your Password"
            label="Re-enter your Password"
          />
          <Button text="Register" type="submit" disabled={isSubmitting} />
          <Link href="/login">Already have an account? Go to login</Link>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
