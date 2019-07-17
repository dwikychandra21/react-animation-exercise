import React, { Component } from 'react';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {

        this.setState((prevState) => {
            const itemLength = prevState.items.length;
            const lastItems = prevState.items[itemLength - 1];
            return {
                items: prevState.items.concat(itemLength > 0 ? lastItems + 1 : 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        console.log(this.state.items);
        
        const listItems = this.state.items.map( (item, index) => (
            <li 
                key={index}
                className="ListItem" 
                onClick={() => this.removeItemHandler(index)}>{item}</li>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <ul className="List">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default List;