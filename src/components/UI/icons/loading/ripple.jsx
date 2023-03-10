import React from "react";

const Ripple = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
      }}
      width='200px'
      height='200px'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle cx='50' cy='50' r='0' fill='none' stroke='#475be8' strokeWidth='4'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='1.4285714285714284s'
          values='0;40'
          keyTimes='0;1'
          keySplines='0 0.2 0.8 1'
          calcMode='spline'
          begin='0s'
        ></animate>
        <animate
          attributeName='opacity'
          repeatCount='indefinite'
          dur='1.4285714285714284s'
          values='1;0'
          keyTimes='0;1'
          keySplines='0.2 0 0.8 1'
          calcMode='spline'
          begin='0s'
        ></animate>
      </circle>
      <circle cx='50' cy='50' r='0' fill='none' stroke='#475be8' strokeWidth='4'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='1.4285714285714284s'
          values='0;40'
          keyTimes='0;1'
          keySplines='0 0.2 0.8 1'
          calcMode='spline'
          begin='-0.7142857142857142s'
        ></animate>
        <animate
          attributeName='opacity'
          repeatCount='indefinite'
          dur='1.4285714285714284s'
          values='1;0'
          keyTimes='0;1'
          keySplines='0.2 0 0.8 1'
          calcMode='spline'
          begin='-0.7142857142857142s'
        ></animate>
      </circle>
    </svg>
  );
};

export default Ripple;
