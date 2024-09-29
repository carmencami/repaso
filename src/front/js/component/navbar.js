import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
			<Link to="/tienda">Tienda</Link>
            {store.isAuthenticated ? (
                <>
                    <Link to="/profile">Perfil</Link>
                    <button onClick={actions.logout} className="btn btn-danger">
                        Cerrar Sesión
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/register">Registro</Link>
                </>
            )}
        </nav>
    );
};

