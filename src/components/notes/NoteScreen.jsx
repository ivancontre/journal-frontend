import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { activeNote, startDeleteNote } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);

    //console.log('note', note)
    if(!formValues.imageUrl && note.imageUrl) formValues.imageUrl = note.imageUrl;
    //console.log('formValues', formValues)
    

    const { title, body } = formValues;

    const activeId = useRef(note.id);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeleteNote(note.id));
    }

    useEffect(() => {
       
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        

        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch]);

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    name="title"
                    placeholder="Algún título"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    name="body"
                    placeholder="¿Qué pasó hoy?"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>
                
                {
                    note.imageUrl  && (
                        <div className="notes__image">
                            <img src={ note.imageUrl } alt="imagen" />
                        </div>
                    )
                }
                
            </div>

            <button className="btn btn-danger" onClick={ handleDelete }>
                <FontAwesomeIcon icon={ faTrash } /> 
                <span> Borrar </span> 
            </button>
        </div>
    )
}