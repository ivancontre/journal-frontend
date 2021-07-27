import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Registro</h3>

            <form>
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Correo"
                    name="email"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Contraseña"
                    name="password1"
                />

                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
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
