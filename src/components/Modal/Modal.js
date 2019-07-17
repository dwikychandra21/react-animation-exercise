import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const modal = props => {
  const animationTimeout = {
      enter: 2000,
      exit: 1000
  }

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimeout}
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
