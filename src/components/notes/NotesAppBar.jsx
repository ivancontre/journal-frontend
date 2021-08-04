import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadImage } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(note));
    }

    const handlePictureUpload = () => {
        document.getElementById('inputFileId').click()
    }

    const handleFileChange = (e) => {

        const file = e.target.files;

        if (file) {
            dispatch(startUploadImage(file[0]));
        }

    }


    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input
                id="inputFileId"
                type="file" 
                style={{display: 'none'}}
                onChange={ handleFileChange }
            
            />


            <div>
                <button className="btn" onClick={ handlePictureUpload }>
                    Imagen
                </button>
                
                <button className="btn" onClick={ handleSave }>
                    Guardar
                </button>
            </div>
        </div>
    )
}