import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Crea una instancia de useNavigate

    const handleRegister = async () => {
        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            setErrorMessage("Por favor, completa todos los campos");
            return;
        }
        setErrorMessage(""); 
        
        await actions.register(username, email, password); 

        if (!store.authError) { 
            navigate("/"); 
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: 'white', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="col-lg-4 mt-5">
                    <div className="card" style={{ backgroundColor: '#192d50', color: 'white' }}>
                        <h2 className="card-title mt-3 text-center">¡Regístrate!</h2>

                        {store.authError && (
                            <div className="alert alert-danger">
                                {store.authError}
                            </div>
                        )}

                        <div className="card-body">
                            <form className="row g-3 mt-0 needs-validation" noValidate>
                                <div className="form-group">
                                    <label className="form-label">Usuario</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control rounded-pill"
                                        placeholder="Usuario"
                                        required
                                    />
                                    <div className="invalid-feedback">Por favor, ingresa un nombre de usuario.</div>
                                </div>

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

                                {errorMessage && (
                                    <div className="alert alert-danger">
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="col-md-12 text-center">
                                    <button
                                        onClick={handleRegister} 
                                        type="button"
                                        className="btn btn-secondary"
                                    >
                                        Registrarse
                                    </button>
                                </div>

                                <div className="text-center">
                                    <span>¿Ya tienes una cuenta? </span>
                                    <Link to="/login">¡Inicia Sesión!</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
