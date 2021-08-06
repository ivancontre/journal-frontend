import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCalendarPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { JournalEntries } from './JournalEntries';
import { starLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {
    
    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {        
        dispatch(starLogout());        
    }

    const hanldeNewEntry = async () => {
        Swal.fire({
            title: 'Creando nueva nota...',
            text: 'Por favor espere',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            await dispatch(startNewNote());
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
            Swal.fire('Error', error, 'error');
        }
        
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <FontAwesomeIcon icon={ faMoon } /> 
                    <span> { name } </span>
                </h3>

                <button
                    className="btn"
                    onClick={ handleLogout }
                >
                    <FontAwesomeIcon icon={ faSignOutAlt } /> 
                    <span> Salir </span> 
                    
                </button>
            </div>

            <div className="journal__new-entry"
                onClick={ hanldeNewEntry }        
            >
                <FontAwesomeIcon icon={ faCalendarPlus } size="5x" />
                <p className="mt-5"> Nueva entrada </p>


            </div>

            <JournalEntries />
            
        </aside>
    )
}
