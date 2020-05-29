import { SET_BRAND, SET_MODEL, SET_LICENSE_PLATE, SET_MECHANIC_NAME, SET_ITEMS_LIST } from '../actions/form';

const INITIAL_STATE = {
    brand: 'Ford',
    model: 'Ka',
    licensePlate: 'KXE5243',
    mechanicName: 'Diogo',
    itemList: [],
}

 export default function formReducer(state = INITIAL_STATE, action) {        
    switch(action.type) {
        case SET_BRAND:            
            return { ...state, brand: action.payload }
        case SET_MODEL:
            return { ...state, model: action.payload }
        case SET_LICENSE_PLATE:
            return { ...state, licensePlate: action.payload }
        case SET_MECHANIC_NAME:
            return { ...state, mechanicName: action.payload }
        case SET_ITEMS_LIST:
            return { ...state, itemList: action.payload }
        default:
            return state
    }
}