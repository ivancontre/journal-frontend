import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p>
                Seleccione algo
                <br />
                Cree una nueva entrada
            </p>

            <FontAwesomeIcon icon={ faStar } className="mt-5" size="4x" />
        </div>
    )
}
