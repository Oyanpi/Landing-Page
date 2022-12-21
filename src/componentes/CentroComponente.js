import React from 'react'
import foto1 from '../img/vino.jpg'
import foto2 from '../img/solomillo.jpg'
import foto3 from '../img/lubina.jpg'
import foto4 from '../img/aspiradora.jpg'
import foto5 from '../img/brandy.jpg'
import foto6 from '../img/chocolate.jpg'


export const CentroComponente = () => {
  return (
    <div id='centro'>

        <h2 id='productos'>Productos en Stock</h2>
        <div class="container">
            <div class="row">

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto1} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Verdejo Vino Blanco</h4>
                    <p class="descripcion">
                       Descuento del 10%
                    </p>
                    <p class="price">
                        $7.00
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto2} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Solomillo de ternera</h4>
                    <p class="descripcion">
                        Descripcion
                    </p>
                    <p class="price">
                        $8.50
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto3} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Lubina</h4>
                    <p class="descripcion">
                        Descripcion
                    </p>
                    <p class="price">
                        $14.95
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto4} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Shark Aspiradora de varilla</h4>
                    <p class="descripcion">
                        Descripcion
                    </p>
                    <p class="price">
                        $30.00
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto5} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Brandy Milenario</h4>
                    <p class="descripcion">
                        Descripcion
                    </p>
                    <p class="price">
                        $12.95
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

                <div class="col-lg-4 menu-item">
                    <a href="#" class="glightbox"><img src={foto6} class="img-producto"></img></a>
                    <h4 class="titulo-producto">Jungly chocolate blanco</h4>
                    <p class="descripcion">
                        Descripcion
                    </p>
                    <p class="price">
                        $9.95
                    </p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="tooltip" title="Inicia sesion para comprar este producto">Añadir al carrito</button>
                </div>

            </div>
        </div>
    </div>
  )
}

