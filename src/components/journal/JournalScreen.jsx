import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { inactivesNotes, startLoadNote } from '../../actions/notes';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {    

    const params = useParams();
    const dispatch = useDispatch();    
    const history = useHistory();

    useEffect(() => {

        const loadNote = async () => {
            try {
                await dispatch(startLoadNote(params.noteId));
            } catch (error) {
                console.log(error);
                Swal.fire('Error', '', 'error');
                history.push('/');
            }            
        }

        if (params.noteId) {    
            loadNote();            
        } else {
            dispatch(inactivesNotes());
        }

    }, [dispatch, params.noteId, history]);

    const { active } = useSelector(state => state.notes);

    return (
        <div className="journal_main-content">
            <Sidebar />

            <main>

                {
                    active ? (<NoteScreen />) : (<NothingSelected />)
                }

            </main>
        </div>
    )
}