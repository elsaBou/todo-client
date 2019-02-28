import React, { Component } from 'react';

class TodoItems extends Component {
    createTasks(item, index) {
        return  <li key={index} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
      }
      
      render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
    
        return <ul className="theList">{listItems}</ul>
      }
}

export default TodoItems;
