import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/notebooks_actions';
import { merge } from 'lodash';


const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    
  }
}
