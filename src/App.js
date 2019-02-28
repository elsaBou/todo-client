import React, { Component } from 'react';
import './App.css';

import ToDoList from "./Components/ToDoList/ToDoList"
import TodoItems from "./Components/TodoItems/TodoItems"


class App extends Component {
  constructor(){
    super();
    this.inputElement = React.createRef();
    this.state = {
      items: [],
      currentItem: {text: "", key: ""},
    }
  }
  addItem = e => {
    e.preventDefault()
   const newItem = this.state.currentItem;
   if (newItem !== "") {
     //console.log(newItem);
     const items = [...this.state.items, newItem]
     this.setState({
       items: items,
       currentItem: {text: "", key: ""}
     })
   }
    
  }

  handleInput = (e) => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
    
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }


  render() {
    return (
      <div className="App">
       <h1>Les Mémos d'Elsa 📌</h1>
       <br />
       <br />
       <br />
       <br />
       <TodoItems entries={this.state.items} deleteItem={this.deleteItem}/>
       <br />
       <br />
       <br />
       <ToDoList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem}/>
      </div>
    );
  }
}

export default App;
