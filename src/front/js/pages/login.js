import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Crear una instancia de useNavigate

    const handleLogin = async () => {
        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("Por favor, completa todos los campos");
            return;
        }
        setErrorMessage(""); // Resetea el mensaje de error antes de registrar
        
        try {
            await actions.login(email, password); // Asegúrate de que esta función maneje errores adecuadamente
            navigate("/"); // Redirige al home después de un inicio de sesión exitoso
        } catch (error) {
            setErrorMessage("Error al iniciar sesión"); // Manejo de errores
        }
    };

    return (
        <div className="principal-container text-center">
            <div className="myform">
                <h4>¡Inicia Sesión!</h4>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

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

                <div>
                    <button
                        onClick={handleLogin}
                        type="button"
                        className="btn btn-secondary"
                    >
                        Iniciar Sesión
                    </button>
                </div>

                <div>
                    ¿No tienes una cuenta? <Link to="/register">¡Regístrate!</Link>
                </div>
            </div>
        </div>
    );
};
