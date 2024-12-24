import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'


export default class App extends Component {   // use clas, then can use state

  state = {
    todos: [
      { id: 1001, name: 'eat', done: true },
      { id: 1002, name: 'sleep', done: true },
      { id: 1003, name: 'game', done: false }
    ]
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    );
  }

}