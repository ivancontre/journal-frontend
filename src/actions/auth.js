import Swal from 'sweetalert2';

// Para hacer peticiones async se utiliza thunk que se configura en el store. Su implementación retorna una función que como argumento tiene un dispatch

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

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

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());

            }).catch( error => {
                Swal.fire('Error', error.message, 'error')
                dispatch(finishLoading());
            })


        // setTimeout(() => {
        //     dispatch(login(email, password));
        // }, 3000);
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

export const startRegisterWithEmailPasswordName = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(login(user.uid, user.displayName));

            }).catch( error => {
                Swal.fire('Error', error.message, 'error')
            })
    }
}

export const starLogout = () => {

    return async (dispatch) => {

        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout())
    }
};

export const logout = () => {
    
    return {
        type: types.logout
    }
    
}