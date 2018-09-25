
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addToDoListAction } from '../actions/todoListAction';
import { connect } from 'react-redux';
import EditModalPage from './common/editModalPage';

import '../css/todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: '',
      isEditModalOpen: false
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
  openEditModal = () => {
    this.setState({isEditModalOpen:true});
  }

  closeNote = () => {
    this.setState({isEditModalOpen: false});
  }
  render() {
    let abc = [];
    let totalData = this.props.addToDoListItem;
    {
      totalData.map((item, i) =>
        abc.push(
          <div key={i} className="mainDiv">
           <div> {i + 1} - {item} </div><div><button onClick = {this.openEditModal}>Edit</button><button>Delete</button></div>
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
        <div>
            {this.state.isEditModalOpen && <EditModalPage isEditModalOpen={this.state.isEditModalOpen} closeModal={this.closeNote}/>}
          </div>
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
