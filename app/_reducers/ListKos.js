initialState = {
  isListKos: false,
  udahLogin: false,
  tokenNya: 'TokenNya Brooo',
  noPage: 0,
  dataItem: '',
  isModalVisible: false,
  isLoading: false,
  isRejectAdd:false,
  isDoneAdd:false
}
const ListKos = (state = initialState, action) => {
  switch (action.type) {
    //Untuk Fetch Awal
    case 'GET_KOS':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_KOS_PENDING':
      return {
        ...state,
        dataItem: null,
        isLoading: true
      }
    case 'GET_KOS_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
    case 'GET_KOS_REJECTED':
      return {
        ...state,
        isListKos: false,
        error: payload.message,
      }
      //---Untuk Sorting
    case 'GET_KOS_SORT':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_KOS_SORT_PENDING':
      return {
        ...state,
        dataItem:null,
        isLoading: true
      }
    case 'GET_KOS_SORT_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false,
        isListKos:true
      }
    case 'GET_KOS_SORT_REJECTED':
      return {
        ...state,
        isListKos: false,
        error: payload.message,
      }
    //--Untuk Add Data
    case 'INIT_ADD_KOS':
      return {
        ...state,
        dataItem:null,
        isLoading: true,
        isDoneAdd:false
      }
    case 'ADD_KOS':
      return {
        ...state,
        isLoading: false
      }
    case 'ADD_KOS_PENDING':
      return {
        ...state,
        dataItem:null,
        isLoading: true
      }
    case 'ADD_KOS_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false,
        isDoneAdd:true
      }
    case 'ADD_KOS_REJECTED':
      return {
        ...state,
        isListKos: false,
        isRejectAdd:true
      }
    
    default:
      return state;
  }
}
export default ListKos