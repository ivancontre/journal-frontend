import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de realizar el login', () => {
        
        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'ABC',
                displayName: 'Iván'
            }
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({
            uid: 'ABC',
            name: 'Iván'
        })
    })


    test('debe de realizar el logout', () => {
        
        const initialState = {
            uid: 'ABC',
            name: 'Iván'
        };

        const action = {
            type: types.logout,
            payload: {
                uid: 'ABC',
                displayName: 'Iván'
            }
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({})
    })
    
})
