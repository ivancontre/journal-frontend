import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNote } from '../helpers/loadNote';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {

    return async (dispatch, getState) => {

        const { auth } = getState();
        const { uid } = auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrl: ''
        }

        Swal.fire({
            title: 'Creando nueva nota...',
            text: 'Por favor espere',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        })

        try {

            const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
            dispatch(activeNote(doc.id, newNote));
            dispatch(addNewNote(doc.id, newNote));
            Swal.close();

        } catch (error) {
            Swal.close();
            Swal.fire('Error', error.error.message, 'error');
        }

        

    }

}

export const addNewNote = (id, note) => {

    return {
        type: types.notesNewEntry,
        payload: {
            id,
            ...note
        }
    }
}

export const activeNote = (id, note) => {

    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }

}

export const inactivesNotes = () => {
    return {
        type: types.notesInactives
    }
}

export const startLoadingNotes = (uid) => {
    
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }

}

export const startLoadNote = (id) => {

    return async (dispatch, getState) => {
        const { auth } = getState();
        const { uid } = auth;

        try {
            const note = await loadNote(uid, id);

            if (note) {
                dispatch(activeNote(id, note));
            } else {
                Swal.fire('Error', 'No existe la nota indicada por URL', 'error');
                return Promise.reject();
            }

        } catch (error) {
            Swal.fire('Error', '', 'error');
        }        
    }

}

export const setNotes = (notes) => {

    return {
        type: types.notesLoad,
        payload: notes
    }

}

export const startSaveNote = (note) => {

    return async (dispatch, getState) => {
        
        const { auth } = getState();
        const { uid } = auth;
        
        if (!note.imageUrl){
            delete note.imageUrl;
        }

        const noteToFirestore = { ...note};
        delete noteToFirestore.id;

        try {            
            await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);
            dispatch(updateNote(note.id, note));
            Swal.fire('Guardado', note.title, 'success');

        } catch (error) {
            Swal.fire('Error', error.error.message, 'error');
        }
        
    }

}

export const updateNote = (id, note) => {

    return {
        type: types.notesUpdate,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}

export const startUploadImage = (file) =>{

    return async (dispatch, getState) => {

        Swal.fire({
            title: 'Subiendo...',
            text: 'Por favor espere',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const { active: note } = getState().notes;

        try {
            const imageUrl = await fileUpload(file);
            note.imageUrl = imageUrl;

            Swal.close();

            dispatch(startSaveNote(note));

        } catch (error) {
            Swal.close();
            Swal.fire('Error', error.error.message, 'error');
        }        

    }
}

export const deleteNote = (id) => {
    
    return {
        type: types.notesDeleted,
        payload: id
    }
}


export const startDeleteNote = (id) => {

    return (dispatch, getState) => {

        const { auth } = getState();
        const { uid } = auth;

        Swal.fire({
            title: '¿Seguro que desea eliminar la nota?',
            showCancelButton: true,
            confirmButtonText: `Sí`
        }).then(async (result) => {
            
            if (result.isConfirmed) {

                Swal.fire({
                    title: 'Eliminado...',
                    text: 'Por favor espere',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })

                try {
                    await db.doc(`${ uid }/journal/notes/${ id }`).delete();
                    dispatch(deleteNote(id));
                    Swal.close();
                } catch (error) {
                    Swal.fire('Error', error.error.message, 'error');
                    Swal.close();
                }

            }

        })

    }

}

export const noteLogout = () => {

    return {
        type: types.notesLogoutCleaning
    }

}