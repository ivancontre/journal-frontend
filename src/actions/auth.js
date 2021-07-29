// Para hacer peticiones async se utiliza thunk que se configura en el store. Su implementación retorna una función que como argumento tiene un dispatch

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const login = (uid, displayName) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(email, password));
        }, 3000);
    }

}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName))
            
            })
    }
}