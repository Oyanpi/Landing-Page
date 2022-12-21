import logo from './logo.svg';
import './App.css';

import NavComponente from './componentes/NavComponente';
import Logo from './img/logo.png';
import { FooterComponente } from './componentes/FooterComponente';
import { CentroComponente } from './componentes/CentroComponente';
import { EtiquetaComponente } from './componentes/EtiquetaComponente';


function App() {
  return (
    <div>
        <meta charset="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>La Vascongada</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <NavComponente imagen = {Logo}></NavComponente>
      <EtiquetaComponente></EtiquetaComponente>
      <CentroComponente></CentroComponente>
      <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
