import React, { memo } from "react";

const Logo = memo(() => {
  return (
    <div className='group flex items-center cursor-pointer transition-colors'>
      <svg
        width='39'
        height='36'
        viewBox='0 0 39 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M29.8398 16.9045C30.0314 17.2378 30.1322 17.6156 30.1322 18C30.1322 18.3845 30.0314 18.7622 29.8398 19.0955L25.531 26.5289C25.3385 26.8608 25.0622 27.1363 24.7298 27.3279C24.3975 27.5194 24.0206 27.6204 23.637 27.6206L15.0656 27.6206C14.6846 27.6177 14.3109 27.5155 13.9815 27.324C13.652 27.1326 13.3782 26.8585 13.187 26.5289L8.87818 19.0955C8.68663 18.7622 8.58582 18.3845 8.58582 18C8.58582 17.6156 8.68663 17.2378 8.87818 16.9045L11.2583 12.8001L16.5546 21.8575C16.6418 22.0126 16.7691 22.1413 16.9232 22.2302C17.0772 22.3191 17.2524 22.3649 17.4302 22.3628L21.2877 22.3628C21.4656 22.3649 21.6408 22.3191 21.7948 22.2302C21.9489 22.1413 22.0762 22.0126 22.1634 21.8575L24.0921 18.4899C24.1795 18.3386 24.2255 18.167 24.2255 17.9923C24.2255 17.8176 24.1795 17.646 24.0921 17.4947L15.3973 2.45046C15.0956 1.92868 14.662 1.49541 14.14 1.19412C13.618 0.892825 13.0259 0.7341 12.4232 0.733871L11.644 0.733871C10.9544 0.733608 10.2769 0.914936 9.6797 1.25961C9.08244 1.60428 8.58648 2.10015 8.24169 2.69734L0.526706 16.0404C0.181668 16.6372 -7.84862e-07 17.3145 -7.54727e-07 18.0039C-7.24593e-07 18.6933 0.181668 19.3705 0.526706 19.9673L8.2417 33.3104C8.58697 33.9069 9.08314 34.402 9.68036 34.746C10.2776 35.0899 10.9548 35.2707 11.644 35.27L27.074 35.27C27.7636 35.2703 28.441 35.089 29.0383 34.7443C29.6355 34.3996 30.1315 33.9037 30.4763 33.3066L38.1913 19.9635C38.5363 19.3666 38.718 18.6894 38.718 18C38.718 17.3106 38.5363 16.6334 38.1913 16.0366L30.4763 2.69348C30.1315 2.09629 29.6355 1.60042 29.0383 1.25575C28.441 0.911074 27.7636 0.729754 27.074 0.730014L20.5162 0.730014L29.8398 16.9045Z'
          fill='#475BE8'
        />
      </svg>
      <span className='text-2xl text-default-black font-bold dark:text-default-white group-hover:text-primary transition-colors ease-linear ml-3'>
        Empick
      </span>
    </div>
  );
});

export default Logo;
