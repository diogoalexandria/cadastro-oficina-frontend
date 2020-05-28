import { SET_BRAND, SET_MODEL, SET_LICENSE_PLATE, SET_MECHANIC_NAME } from '../actions/form';

const INITIAL_STATE = {
    brand: '',
    model: '',
    licensePlate: '',
    mechanicName: ''
}

 export default function formReducer(state = INITIAL_STATE, action) {    
    switch(action.type) {
        case SET_BRAND:            
            return { ...state, brand: action.payload }
        case SET_MODEL:
            return { ...state, model: action.payload }
        case SET_LICENSE_PLATE:
            return { ...state, model: action.payload }
        case SET_MECHANIC_NAME:
            return { ...state, model: action.payload }
        default:
            return state
    }
}