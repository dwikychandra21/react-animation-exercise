import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = props => {
  const cssClasses = [
    "Modal",
    props.show ? "ModalOpen" : "ModalClosed"
  ];

  const animationTimeout = {
      enter: 400,
      exit: 1000
  }

  return (
    <Transition
      in={props.show}
      timeout={animationTimeout}
      unmountOnExit
      onEnter={() => console.log('onEnter')}
      onEntering={() => console.log('onEntering')}
      onEntered={() => console.log('onEntered')}
      onExit={() => console.log('onExit')}
      onExiting={() => console.log('onExiting')}
      onExited={() => console.log('onExited')}
    >
      <div className={cssClasses.join(" ")}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </Transition>
  );
};

export default modal;
