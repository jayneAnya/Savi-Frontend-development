import { apiGet } from '../../utils/apiHelper';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
  LOGOUT,
} from '../types';

export default function authReducer(state, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.data.token);
       
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          loading: false,
        };
      case LOADING:
        return {
          ...state,
          loading: action.payload,
        };
      case LOGIN_FAIL:
      
        localStorage.removeItem('token');
     
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
        };
      case LOGOUT:
        localStorage.removeItem('token');
       
        window.location.href = '/';
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  

  

