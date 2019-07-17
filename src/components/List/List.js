import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3]
  };

  addItemHandler = () => {
    this.setState(prevState => {
      const itemLength = prevState.items.length;
      const lastItems = prevState.items[itemLength - 1];
      return {
        items: prevState.items.concat(itemLength > 0 ? lastItems + 1 : 1)
      };
    });
  };

  removeItemHandler = selIndex => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex)
      };
    });
  };

  render() {
    console.log(this.state.items);

    // should not use index as an key
    const listItems = this.state.items.map((item, index) => (
      <CSSTransition key={index} timeout={300} classNames="fade">
        <li
          className="ListItem"
          onClick={() => this.removeItemHandler(index)}
        >
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
