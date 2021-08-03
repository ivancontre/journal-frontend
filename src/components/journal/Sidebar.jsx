import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { starLogout } from '../../actions/auth';
import { newEntry } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth);


    const handleLogout = () => {        
        dispatch(starLogout());        
    }

    const hanldeNewEntry = () => {
        dispatch(newEntry())
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
                    Salir
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
