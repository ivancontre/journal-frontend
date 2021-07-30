import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import validator from 'validator';

import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import useForm from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // Para ocupar una parte del state de redux
    const state = useSelector(state => state.ui);
    const { msgError, loading } = state;

    const [{ email, password }, handleInputChange] = useForm({
        email: 'ivanc.contre@gmail.com',
        password: '123456'
    });

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }        
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {

        if (!validator.isEmail(email)) {

            dispatch(setError('Email is not valid'));
            return false;

        } else if (!password || password.lenght < 5) {

            dispatch(setError('Password should be at least 6 characteres and match each other'));
            return false;

        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Iniciar sesión</h3>

            <form onSubmit={ handleLogin } >

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
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    disabled={ loading }
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p>Ingresar con google</p>

                    <div 
                        onClick={ handleGoogleLogin }
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"    
                >
                    Crea una nueva cuenta
                </Link>

            </form>
        </>
    )
}