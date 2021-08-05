import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useParams, useHistory } from 'react-router-dom';

export const JournalEntry = ({
    id,
    title,
    body,
    date,
    imageUrl
}) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();

    const history = useHistory();

    const params = useParams();

    const { active } = useSelector(state => state.notes);

    const handleEntryClick = () => {
        
        const note = {
            title,
            body,
            date,
            imageUrl
        };

        dispatch(activeNote(id, note));

        if (params.noteId !== id) {
            history.push(`/${ id }`); 
            //window.history.pushState(null, null, `#/${ id }`);
        } 

    }
    
    return (
        <div className={'journal__entry' + (active?.id === id ? ' journal__entry-active' : '')} onClick={ handleEntryClick } >

            {
                imageUrl && (
                    <div 
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ imageUrl })`
                        }}
                    >

                    </div>
                )
            }            

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>

                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>
                    {
                        noteDate.format('dddd')
                    }
                </span>
                <h4>
                    {
                        noteDate.format('Do')
                    }
                </h4>
            </div>
        </div>
    )
}

