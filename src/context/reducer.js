import {CHANGE_SELECTED_COCTAIL, FETCH_ALL_COCTAILS, REMOVE_SELECTED_COCTAIL, SET_LOADING} from "./actions";

export default function reducer(state, action) {
    switch (action.type) {
        case FETCH_ALL_COCTAILS:
            return {...state, coctails: action.payload, loading: false}
            break;
        case SET_LOADING:
            return {...state, loading: action.payload}
            break
        case CHANGE_SELECTED_COCTAIL:
            return {...state,loading:false,selectedCoctail:action.payload}
        case REMOVE_SELECTED_COCTAIL:
            return {...state,selectedCoctail:null}
        default:
            return state
    }
}