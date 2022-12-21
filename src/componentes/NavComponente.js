import React from 'react'
import Modal from './ModalComponente'
import Modal2 from './Modal2Componente'

function NavComponente(props) {
    return (
        <div id='inicio'>
            <div class="container" id='navbar'>
                <div class="row">
                    <nav class="navbar navbar-expand-lg">
                        <div class="col-2">
                            <div class="">
                                <img src={props.imagen} class="w-100"></img>
                            </div>
                        </div>
                        

                        <div class="navbar-collapse">
                            <div class="col-10">
                                <ul class="navbar-nav mr-auto justify-content-around">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#menu"><p class="texto-nav">Menu</p></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#categorias"><p class="texto-nav">Categorias</p></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#marcas"><p class="texto-nav">Marcas</p></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#dutyfree"><p class="texto-nav">Duty Free</p></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#"><Modal></Modal></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#"><Modal2></Modal2></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavComponente
