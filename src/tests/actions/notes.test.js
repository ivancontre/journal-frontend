import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploadImage } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => {
        return 'https://hola.com/cosa.jpg'
    })
}))

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'CBgzJKGgpOoXLgwOeQTp',
            title: 'Hola',
            body: 'cuerpo'

        }
    }
};

let store = mockStore(initState);

describe('Pruebas con acciones de notes', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })
    
    test('should ', async () => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
                imageUrl: ''
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesNewEntry,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
                imageUrl: ''
            }
        });

        const { id } = actions[0].payload;

        await db.doc(`/TESTING/journal/notes/${ id }`).delete();

    })

    test('startLoadingNotes debe cargar las notas', async () => {
        
        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        
    })


    test('debe de actualizar la nota', async () => {
        
        const note = {
            id: 'CBgzJKGgpOoXLgwOeQTp',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions()
        ;
        expect(actions[0].type).toBe(types.notesUpdate);

        const doc = await db.doc(`TESTING/journal/notes/${ note.id }`).get();

        expect(doc.data().title).toBe(note.title)
    })
    
    
    test('startUploadImage debe de actualizar el url del entry o note', async () => {
        
        const file = new File([], 'photo.jpg');

        await store.dispatch(startUploadImage(file));

        const doc = await db.doc(`TESTING/journal/notes/CBgzJKGgpOoXLgwOeQTp`).get();

        expect(doc.data().imageUrl).toBe('https://hola.com/cosa.jpg')


    })
    
})
