/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BaseInput from "../UI/fields/BaseInput";
import BaseCheckBox from "../UI/fields/BaseCheckBox";
import BaseButton from "../UI/buttons/BaseButton";
import googleIcon from "../../assets/icons/google.svg";
import { signIn } from "../../features/auth/authSlice";
import { Formik } from "formik";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const LoginForm = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userValue, setUserValue] = useLocalStorage("user", "");
  const [remember, setRemember] = useState(false);

  const loginError = useSelector((state) => state.auth.error);

  const login = async (values, onSubmitProps) => {
    try {
      const result = await dispatch(signIn(values)).unwrap();

      setUserValue({ ...result.user, token: result.accessToken });

      onSubmitProps.resetForm();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={className}>
      <Formik onSubmit={login} initialValues={initialValuesLogin} validationSchema={loginSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <BaseInput
              type='text'
              placeholder='Enter your email'
              label='Email'
              id='email'
              value={values.email}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <BaseInput
              type='password'
              placeholder='**********'
              label='Password'
              id='password'
              value={values.password}
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              className='mt-4'
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {loginError && <span className='text-danger text-sm duration-200'>{loginError}</span>}
            <div className='flex justify-between items-center mt-5'>
              <BaseCheckBox
                label='Remember for 30 days'
                value={remember}
                onChange={(value) => setRemember(value)}
              />
              <Link
                to='/'
                className='typography--variant-subheading2 transition-colors text-primary hover:text-primary-hover dark:hover:text-primary'
              >
                Forgot Password
              </Link>
            </div>
            <div className='mt-5'>
              <BaseButton type='submit' className='btn-primary'>
                Sign In
              </BaseButton>
              <BaseButton className='btn-ghost mt-5'>
                <img src={googleIcon} alt='google' className='mr-3' />
                Sign in with Google
              </BaseButton>
            </div>
            <div className='mt-8 text-center typography--variant-body2 font-medium'>
              Don’t have an account?{" "}
              <button className='text-primary hover:text-primary-hover dark:hover:text-primary transition-colors'>
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
