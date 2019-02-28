import React, { Component } from 'react';
import "./ToDoList.css"

class ToDoList extends Component {
  // componentDidUpdate() {
  //   this.props.inputElement.current.focus()
  // }
  render() {
    return (
      <div className="toDoListMain">
       <form onSubmit={this.props.addItem}>
           <input placeholder="A faire ..." ref={this.props.inputElement} value={this.props.currentItem.text} onChange={this.props.handleInput}></input>
           <br />
           <button type="submit">AJOUTER UNE TACHE</button>
       </form>
      </div>
    );
  }
}

export default ToDoList;
