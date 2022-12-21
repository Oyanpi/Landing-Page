import React from 'react'

export const FooterComponente = () => {
  return (
    <div>

        <footer id="footer" class="footer">
            <div class="container">

                <form>
                    <h2 class="titulo-footer">Contactanos por correo</h2>
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Tu nombre" required></input>
                            </div>
                            <div class="col-lg-6 form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Tu correo" required></input>
                            </div>
                        </div>
                        <div class="form-group mt-2">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Mensaje" required></input>
                        </div>
                    <div class="text-center mt-2"><button type="submit" class="btn btn-dark">Contactar</button></div>
                </form>

                <div class="row " id='datos'>
                    <div class="col-lg-3 col-md-6 col-ls-6">
                        <i class="bi bi-geo-alt icon"></i>
                        <div>
                            <h4 class="titulo-footer">Direccion</h4>
                            <p> 
                                A108 Adam Street <br></br>
                                Donostia - ES<br></br> 
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-ls-6 ">
                        <i class="bi bi-telephone icon"></i>
                        <div>
                            <h4 class="titulo-footer">Soporte al cliente</h4>
                            <p>
                                <strong>Telefono:</strong> +1 943 76 09 87<br></br>
                                <strong>Correo:</strong> lvsgada@gmail.com<br></br>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-ls-6">
                        <i class="bi bi-clock icon"></i>
                        <div>
                            <h4 class="titulo-footer">Horario</h4>
                            <p>
                            <strong>Lun-Sab:</strong> 11AM - 23PM<br></br>
                            Domingo: Cerrado
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-ls-6">
                        <div class="social">
                            <a href="https://twitter.com/" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://es-es.facebook.com/" class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/" class="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://www.reddit.com/" class="reddit"><i class="bi bi-reddit"></i></a>
                        </div>
                        <h4 class="titulo-footer">Redes</h4>
                    </div>
                </div>
            
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>La Vascongada</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>

    </div>
  )
}
