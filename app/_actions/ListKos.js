import axios from 'axios'
import VarGlobal from '../environtment/VarGlobal'

export const getKost = () => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`${VarGlobal.host}/dorms`)
  }
}
export const sortKos = (sortBy,typeSort) => {
  return {
    type: 'GET_USER_SORT',
    payload: axios.get(`${VarGlobal.host}/dorms/sort/${sortBy}/${typeSort}`)
  }
}