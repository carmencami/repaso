import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../../img/imagen1.jpg"; // Ajusta la ruta según donde estén tus imágenes
import imagen2 from "../../img/imagen2.jpg";
import imagen3 from "../../img/imagen3.jpg";
import vestidos from "../../img/vestidos.jpg";
import pantalones from "../../img/pantalones.jpg";
import blusa from "../../img/blusa.jpg"


export const Home = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100" alt="Imagen 1" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Estilo Boho Chic</h5>
                            <p>Descubre la elegancia y la comodidad en cada prenda.</p>
                            <Link to="/tienda" className="btn btn-light">Explora la Tienda</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="Imagen 2" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ropa Única</h5>
                            <p>Encuentra piezas que resalten tu personalidad.</p>
                            <Link to="/tienda" className="btn btn-light">Explora la Tienda</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100" alt="Imagen 3" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Moda Sostenible</h5>
                            <p>Vestimenta consciente y con estilo.</p>
                            <Link to="/tienda" className="btn btn-light">Explora la Tienda</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

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
                <h2 className="text-center">Sobre Nosotros</h2>
                <p className="text-center">
                    En Cami Aguilar, nos especializamos en ofrecer ropa boho de alta calidad. Nuestra misión es proporcionar estilos únicos que se adapten a tu personalidad y a tu estilo de vida.
                </p>
            </div>

            <div className="container mt-5 text-center">
                <h2>Únete a nuestra comunidad</h2>
                <p>Recibe ofertas exclusivas y actualizaciones sobre nuevos productos.</p>
                <Link to="/register" className="btn btn-primary">¡Regístrate Ahora!</Link>
            </div>
        </div>
    );
};