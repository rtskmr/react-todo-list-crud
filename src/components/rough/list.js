
import React, { Component } from 'react';
import '../css/todo.css';
import List from '../components/list';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <p>ToDo list examples</p>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Todo;
