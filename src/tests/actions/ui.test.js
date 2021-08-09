import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en ui actions', () => {
    
    test('todas las acciones deben funcionar', () => {
        
        const action = setError('help');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'help'
        });


        const remove = removeError()
        const start = startLoading()
        const finish = finishLoading()

        expect(remove).toEqual({
            type: types.uiRemoveError
        })
        expect(start).toEqual({
            type: types.uiStartLoading
        })
        expect(finish).toEqual({
            type: types.uiFinishLoading
        })
    })
    
})
