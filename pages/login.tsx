import type { NextPage } from "next";
import { Formik, Form, FormikHelpers, FormikState } from "formik";
import Link from "next/link";
import { Input, Button } from "components";
import { ILogin } from "interface";
import { loginSchema } from "schema/loginSchema";

const Login: NextPage = () => {
  const initialValues: ILogin = {
    email: "",
    password: "",
  };
  const onSubmit = async (values: ILogin, helpers: FormikHelpers<ILogin>) => {
    console.log(values, helpers);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }: FormikState<ILogin>) => (
        <Form>
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

          <Button text="Login" type="submit" disabled={isSubmitting} />
          <Link href="/login">Don't have an account? Go to Register</Link>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
