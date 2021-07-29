import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import useForm from '../../hooks/useForm';

export const LoginScreen = () => {

    const disptach = useDispatch();

    const [{ email, password }, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);

        disptach(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        disptach(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Iniciar sesión</h3>

            <form onSubmit={ handleLogin }>
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