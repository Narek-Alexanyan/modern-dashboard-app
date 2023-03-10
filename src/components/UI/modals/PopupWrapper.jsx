import React, { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const PopupWrapper = memo(({ children, isOpen, className }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition in={isOpen} nodeRef={nodeRef} timeout={300} classNames='popup' unmountOnExit>
      <div
        ref={nodeRef}
        className={`absolute z-10 bg-default-white dark:bg-default-black flex flex-col gap-3 popup-shadow rounded-lg p-5 max-h-96 overflow-x-auto pretty-scrollbar
         ${className}`}
      >
        {children}
      </div>
    </CSSTransition>
  );
});

export default PopupWrapper;
