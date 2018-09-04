export const TODO_LIST_ADD = 'TODO_LIST_ADD';

//Method 1
export const addToDoListAction =  (item) => {
    return (dispatch) => {
      dispatch({type: TODO_LIST_ADD, payload: item});
    }
  }

//Method 2
//   export const getCrewListAction = () => async(dispatch, getState) => {
//     dispatch({type: SET_IS_LOADING, payload: true});
//     try {
//       const propertyCode = getState().properties.selectedPropertyCode;
//       const result = await loaders.loadCrewList(propertyCode, shipTime);
//       dispatch({ type: SET_CREW_LIST, payload: crewList.sort(sortByFirstName) });
//       dispatch({type: SET_IS_LOADING, payload: false});
//     } catch(error){
//       dispatch({ type: SET_CREW_LIST, payload: [] });
//       dispatch({type: SET_IS_LOADING, payload: false});
//     }
//   };
