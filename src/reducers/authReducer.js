/*
    {
        uid: 21312323,
        name: 'Iván'
    }

*/

// para llamar a los casos del switch se utiliza el dispatch, en donde se le pasa como parámetro alguna función definida en los actions. Luego el disptach interactúa con el store

import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
            return {};
    
        default:
            return state;
    }
}