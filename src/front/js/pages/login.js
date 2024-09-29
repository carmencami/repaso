import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("Por favor, completa todos los campos");
            return;
        }
        setErrorMessage(""); 
        
        try {
            await actions.login(email, password); 
            navigate("/"); 
        } catch (error) {
            setErrorMessage("Error al iniciar sesión"); // Manejo de errores
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: 'white', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="col-lg-4 mt-5">
                    <div className="card" style={{ backgroundColor: '#192d50', color: 'white' }}>
                        <h2 className="card-title mt-3 text-center">Login</h2>
                        <p className="card-text text-center">Por favor, inicia sesión para acceder a nuestro sitio web.</p>
                        <hr className="border" style={{ width: '70%', alignSelf: 'center', margin: '0px' }} />
                        <div className="card-body">
                            {errorMessage && (
                                <div className="alert alert-danger">{errorMessage}</div>
                            )}
                            <form className="row g-3 mt-0 needs-validation" noValidate>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control rounded-pill"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="invalid-feedback">Por favor, ingresa un email válido.</div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control rounded-pill"
                                        placeholder="Contraseña"
                                        required
                                    />
                                    <div className="invalid-feedback">Ingresa tu contraseña.</div>
                                </div>

                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                                    </div>
                                </div>

                                <div className="col-6 text-end">
                                    <Link to="/recover_email">¿Olvidaste tu contraseña?</Link>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button onClick={handleLogin} type="button" className="btn btn-secondary">
                                        Iniciar Sesión
                                    </button>
                                </div>

                                <div className="text-center">
                                    <span>¿No tienes una cuenta? </span>
                                    <Link to="/register">¡Regístrate!</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
