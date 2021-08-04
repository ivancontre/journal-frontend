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
                Swal.fire('Error', error.error.message, 'error')
                dispatch(finishLoading());
            })
    }

}

export const startGoogleLogin = () => {
    
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName))
            
            }).catch( error => {
                Swal.fire('Error', error.error.message, 'error')
            })
    }

}

export const startRegisterWithEmailPasswordName = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {

                try {

                    await user.updateProfile({ displayName: name });
                    dispatch(login(user.uid, user.displayName));

                } catch (error) {
                    Swal.fire('Error', error.error.message, 'error');
                }
                

            }).catch( error => {
                Swal.fire('Error', error.error.message, 'error');
            })
    }
}

export const starLogout = () => {

    return (dispatch) => {        

        Swal.fire({
            title: '¿Seguro que desea cerrar sesión?',
            showCancelButton: true,
            confirmButtonText: `Sí`
        }).then(async (result) => {
            
            if (result.isConfirmed) {

                try {

                    await firebase.auth().signOut();
                    dispatch(logout());
                    dispatch(noteLogout());

                } catch (error) {
                    Swal.fire('Error', error.error.message, 'error');
                }                
            }

        })
    }
};

export const logout = () => {
    
    return {
        type: types.logout
    }
    
}