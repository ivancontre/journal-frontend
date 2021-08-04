import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const newEntry = () => {

    return async (dispatch, getState) => {

        const { auth } = getState();
        const { uid } = auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrl: ''
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
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

export const startLoadingNotes = (uid) => {
    
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
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

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);

        dispatch(updateNote(note.id, note));

        Swal.fire('Guardado', note.title, 'success');
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
        })

        const { active: note } = getState().notes;

        const imageUrl = await fileUpload(file);

        Swal.close();

        dispatch(startSaveNote({
            ...note,
            imageUrl
        }));

    }
}