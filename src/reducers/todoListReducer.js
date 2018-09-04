import {TODO_LIST_ADD}  from '../actions/todoListAction';

const initialState = {
    addToDoListItem :[]
}
export default function addToDoListReducer  (state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_ADD:
        const item = action.payload;
        const list =  [...state.addToDoListItem]
        list.push(item);
      return {...state, addToDoListItem:list};
    default:
      return state;
  }
}
