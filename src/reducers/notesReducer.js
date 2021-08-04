/*
    {
        notes: [],
        active: null,
        active: {
            id: 'dfsdfsdsaf,
            title: '',
            body: '',
            imageUrl: '',
            date: 235435434
        }
    }



*/

import { types } from "../types/types";

const initalState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initalState, action) => {
    switch (action.type) {

        case types.notesActive:

            return {
                ...state,
                active: { // o active: action.payload
                    ...action.payload
                }
            };

        case types.notesNewEntry:
            console.log(action.payload)
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }

        case types.notesLoad:
            
            return {
                ...state,
                notes: [...action.payload],
                
            };

        case types.notesUpdate:

            return {
                ...state,
                notes: state.notes.map((note) => {
                    if (action.payload.id === note.id) {
                        return action.payload.note
                    } else { 
                        return note;
                    }
                })

                //notes: state.notes.map( note => action.payload.id === note.id ? action.payload.note : note)
            }

        case types.notesDeleted:

            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null
            }

        case types.notesLogoutCleaning:

            return {
                notes: [],
                active: null
            }

        default:
            return state;
    }
}