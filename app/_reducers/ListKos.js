initialState = {
  isListKos: false,
  udahLogin: false,
  tokenNya: 'TokenNya Brooo',
  noPage: 0,
  dataItem: '',
  isModalVisible: false,
  isLoading: true
}
const ListKos = (state = initialState, action) => {
  switch (action.type) {
    //Untuk Fetch Awal
    case 'GET_USERS':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_USERS_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERS_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
    case 'GET_USERS_REJECTED':
      return {
        ...state,
        dataItem: action.payload,
        isListKos: false,
        error: payload.message,
      }
      //---Untuk Sorting
    case 'GET_USERS_SORT':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_USERS_SORT_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERS_SORT_FULFILLED':
      return {
        ...state,
        dataItem: null,
        isLoading: false
      }
    case 'GET_USERS_SORT_REJECTED':
      return {
        ...state,
        dataItem: action.payload,
        isListKos: false,
        error: payload.message,
      }
    default:
      return state;
  }
}
export default ListKos