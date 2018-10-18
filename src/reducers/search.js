let initData = {
  searchText: '',
  searchList: []
}

export function search(state = initData, action) {
  console.log(action,'action search');
  
  switch (action.type) {
    case 'RECEIVE_HOT_SEARCH':
      return {
        ...state,
        searchText: action.payload
      }

    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchList: action.payload
      }
    default:
      return state
  }
}
