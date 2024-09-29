import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#192d50' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" style={{ height: '60px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-md-auto gap-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={{ color: '#fffff1' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda" style={{ color: '#fffff1' }}>Tienda</Link>
                        </li>
                        {store.isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile" style={{ color: '#fffff1' }}>Perfil</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={actions.logout} className="btn btn-danger">Cerrar Sesión</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" style={{ color: '#fffff1' }}>Iniciar Sesión</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" style={{ color: '#fffff1' }}>Registro</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
