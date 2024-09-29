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
        setErrorMessage(""); // Resetea el mensaje de error antes de registrar
        
        await actions.register(username, email, password); // Espera a que se registre

        if (!store.authError) { // Si no hay errores en la autenticación
            navigate("/"); // Redirige a Home
        }
    };

    return (
        <div className="principal-container text-center">
            <div className="myform">
                <h4>¡Regístrate!</h4>

                {store.authError && (
                    <div className="alert alert-danger">
                        {store.authError}
                    </div>
                )}

                <div className="form-group">
                    <label>Usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        placeholder="Usuario"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Contraseña"
                    />
                </div>

                {errorMessage && (
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                )}

                <div>
                    <button
                        onClick={handleRegister} 
                        type="button"
                        className="btn btn-secondary"
                    >
                        Registrarse
                    </button>
                </div>

                <div>
                    ¿Ya tienes una cuenta? <Link to="/login">¡Inicia Sesión!</Link>
                </div>
            </div>
        </div>
    );
};
