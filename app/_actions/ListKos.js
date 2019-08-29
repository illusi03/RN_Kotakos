import axios from 'axios'
import VarGlobal from '../environtment/VarGlobal'

export const getKost = () => {
  return {
    type: 'GET_KOS',
    payload: axios.get(`${VarGlobal.host}/dorms`)
  }
}
export const sortKos = (sortBy, typeSort) => {
  return {
    type: 'GET_KOS_SORT',
    payload: axios.get(`${VarGlobal.host}/dorms/sort/${sortBy}/${typeSort}`)
  }
}
export const addKost = (kosanNya,userTokenTemp) => {
  return {
    type: 'ADD_KOS',
    payload: axios({
      url: `${VarGlobal.host}/dorm`,
      method: 'POST',
      data: kosanNya,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `bearer ${userTokenTemp}`
      }
    })
  }
}
export const initKos = () => {
  return {
    type: 'INIT_ADD_KOS'
  }
}