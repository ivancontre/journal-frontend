import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import useForm from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Para ocupar una parte del state de redux
    const state = useSelector(state => state.ui);

    const { msgError } = state;

    const [{name, email, password1, password2}, handleInputChange] = useForm({
        name: 'Iván',
        email: 'ivanc.contre@gmail.com',
        password1: '',
        password2: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password1, name));
        }        
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {

            dispatch(setError('Name is required'));
            return false;

        } else if (!validator.isEmail(email)) {

            dispatch(setError('Email is not valid'));
            return false;

        } else if (password1 !== password2 || password1.length < 5) {

            dispatch(setError('Password should be at least 6 characteres and match each other'));
            return false;

        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Registro</h3>

            <form onSubmit={ handleRegister } className="animate__animated animate__fadeIn animate__faster">

                {
                    
                        msgError &&
                        (
                            <div className="auth__alert-error">
                                { msgError }
                            </div>
                        )
                }                

                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Correo"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Contraseña"
                    name="password1"
                    value={ password1 }
                    onChange={ handleInputChange }
                />

                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Registrar
                </button>

                <Link 
                    to="/auth/login"
                    className="link"    
                >
                    ¿Ya registrado?
                </Link>

            </form>
        </>
    )
}
