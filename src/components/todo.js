
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addToDoListAction } from '../actions/todoListAction';
import { connect } from 'react-redux';

import '../css/todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ''
    };
  }

  add = (e) => {
    this.props.addToDoListAction(this.state.todoList);
    this.setState({
      'todoList': ''
    },)
  }
  inputChange = (e) => {
    this.setState({
      'todoList': e.target.value
    })
  }
  render() {
    // console.log(this.props.addToDoListItem);
    let abc = [];
    let totalData = this.props.addToDoListItem;
    {
      totalData.map((item, i) =>
        abc.push(
          <div key={i} className="mainDiv">
            {i + 1} - {item} <button>Edit</button><button>Delete</button>
          </div>
        )
      )
    }
    return (
      <div className="mainPage">
        <div className="todolistInput">
          <input type="text" id="fname" placeholder="Enter Item here" value={this.state.todoList} onChange={this.inputChange} />
          <div className="addBtnStyle">
            <button onClick={(e) => this.add(e)}>Add</button>
          </div>
        </div>
        <div className="addedListSection">{abc}</div>

      </div>
    );
  }
}
//
const mapStateToProps = (state) => ({
  addToDoListItem: state.todoListReducer.addToDoListItem,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ addToDoListAction }, dispatch);
//

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
