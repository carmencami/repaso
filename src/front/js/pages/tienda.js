import React from "react";
import { Link } from "react-router-dom";
import pantalones from "../../img/pantalones.jpg"; 
import vestidos from "../../img/vestidos.jpg";
import blusa from "../../img/blusa.jpg";

export const Tienda = () => {
    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center">Categorías</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={pantalones} className="card-img-top" alt="Pantalones" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Pantalones</h5>
                                <p className="card-text">Explora nuestra colección de pantalones modernos y cómodos.</p>
                                <Link to="/categoria/pantalones" className="btn btn-primary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={blusa} className="card-img-top" alt="Camisas" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Camisas</h5>
                                <p className="card-text">Descubre nuestras camisas elegantes y casuales.</p>
                                <Link to="/categoria/camisas" className="btn btn-primary">Ver Más</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={vestidos} className="card-img-top" alt="Vestidos" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Vestidos</h5>
                                <p className="card-text">Explora nuestra encantadora colección de vestidos.</p>
                                <Link to="/categoria/vestidos" className="btn btn-primary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="text-center">Toda la tienda</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={blusa} className="card-img-top" alt="Producto 1" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del Producto 1</h5>
                                <p className="card-text">Descripción corta del producto 1.</p>
                                <Link to="/producto/1" className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={vestidos} className="card-img-top" alt="Producto 2" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del Producto 2</h5>
                                <p className="card-text">Descripción corta del producto 2.</p>
                                <Link to="/producto/2" className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={blusa} className="card-img-top" alt="Producto 3" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del Producto 3</h5>
                                <p className="card-text">Descripción corta del producto 3.</p>
                                <Link to="/producto/3" className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
