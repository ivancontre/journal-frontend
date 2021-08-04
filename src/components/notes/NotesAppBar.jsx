import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSave } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadImage } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.notes);

    const currentDate = moment().format('DD MMMM YYYY');

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
            <span>{ currentDate }</span>

            <input
                id="inputFileId"
                type="file" 
                style={{display: 'none'}}
                onChange={ handleFileChange }
            
            />


            <div>
                <button className="btn" onClick={ handlePictureUpload }>
                    <FontAwesomeIcon icon={ faImage } /> 
                    <span> Imagen </span> 
                </button>
                
                <button className="btn" onClick={ handleSave }>
                    <FontAwesomeIcon icon={ faSave } /> 
                    <span> Guardar </span> 
                    
                </button>
            </div>
        </div>
    )
}