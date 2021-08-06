import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSave } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startSaveNote, startUploadImage } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.notes);

    const currentDate = moment().format('DD MMMM YYYY');

    const handleSave = async () => {

        try {
            await dispatch(startSaveNote(note));
            Swal.fire('Guardado', 'Nota actualizada correctamente', 'success');
        } catch (error) {
            console.log(error)
            Swal.fire('Error', '', 'error');
        }   
        
    }

    const handlePictureUpload = () => {
        document.getElementById('inputFileId').click()
    }

    const handleFileChange = async (e) => {

        const file = e.target.files;

        if (file) {
            
            Swal.fire({
                title: 'Subiendo...',
                text: 'Por favor espere',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                await dispatch(startUploadImage(file[0]));
                Swal.close();
            } catch (error) {
                console.log(error);
                Swal.close();
                Swal.fire('Error', '', 'error');
            }            
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