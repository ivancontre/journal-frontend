import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <FontAwesomeIcon icon={ faMoon } /> 
                    <span> Iván </span>
                </h3>

                <button
                    className="btn"
                >
                    Salir
                </button>
            </div>

            <div className="journal__new-entry">
                <FontAwesomeIcon icon={ faCalendarPlus } size="5x" />
                <p className="mt-5"> Nueva entrada </p>

            </div>
        </aside>
    )
}
