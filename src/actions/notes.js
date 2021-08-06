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

        try {
            const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
            dispatch(activeNote(doc.id, newNote));
            dispatch(addNewNote(doc.id, newNote));
            return Promise.resolve();            

        } catch (error) {
            return Promise.reject(error);
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

        try {
            const notes = await loadNotes(uid);
            dispatch(setNotes(notes));
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
        
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
                return Promise.resolve();
            } else {                
                return Promise.reject('No existe la nota indicada por URL');
            }

        } catch (error) {
            return Promise.reject(error);
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
            return Promise.resolve();

        } catch (error) {
            return Promise.reject(error);
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

        const { active: note } = getState().notes;

        try {
            const imageUrl = await fileUpload(file);
            note.imageUrl = imageUrl;            

            dispatch(startSaveNote(note));

        } catch (error) {
            return Promise.reject(error);
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

    return async (dispatch, getState) => {

        const { auth } = getState();
        const { uid } = auth;

        try {
            await db.doc(`${ uid }/journal/notes/${ id }`).delete();
            dispatch(deleteNote(id));
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const noteLogout = () => {

    return {
        type: types.notesLogoutCleaning
    }

}