import { types } from "../../types/types";


const typesToEvaluate = {

    login: '[Auth] Login',
    logout: '[Auth] Logout',
    
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    notesNewEntry: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdate: '[Notes] Update note',
    notesFileUrl: '[Notes] Update image url',
    notesDeleted: '[Notes] Deleted note',
    notesLogoutCleaning: '[Notes] Logout cleaning'

};

describe('Pruebas con nuestros types', () => {

    test('debe de retornar el objeto types ', () => {
        expect(types).toEqual(typesToEvaluate)
    })
    
})
