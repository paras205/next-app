import type { NextPage } from "next";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Formik, Form, FormikHelpers, FormikState } from "formik";
import Link from "next/link";
import actions from "store/actions/auth";
import { Input, Button } from "components";
import { IRegister } from "interface";
import { RegistrationSchema } from "schema/registerSchema";

const Register: NextPage = () => {
  const initialValues: IRegister = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };
  const dispatch = useDispatch();
  const onSubmit = async (
    values: IRegister,
    helpers: FormikHelpers<IRegister>
  ) => {
    dispatch(actions.register(values));
  };
  const { loading } = useSelector(
    (state: any) => ({
      loading: state.global.loading,
    }),
    shallowEqual
  );

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
          <Button
            text="Register"
            type="submit"
            loading={loading}
            disabled={isSubmitting}
          />
          <Link href="/login">Already have an account? Go to login</Link>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
