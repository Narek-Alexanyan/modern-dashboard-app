import React from "react";

import loginBg from "../../assets/images/login-bg.png";
import LoginForm from "../../components/form/LoginForm";

const LoginPage = () => {
  return (
    <div className='w-full h-screen flex justify-between items-center'>
      <div className='w-96 max-w-full px-4 mx-auto'>
        <div>
          <h1 className='typography--variant-h4'>Welcome back</h1>
          <p className='typography--variant-body1 mt-2'>Welcome back! Please enter your details.</p>
        </div>
        <LoginForm className='mt-9' />
      </div>

      <img
        src={loginBg}
        alt='building'
        className='w-[720px] xl:w-[480px] lg:hidden object-cover max-w-full h-full'
      />
    </div>
  );
};

export default LoginPage;
