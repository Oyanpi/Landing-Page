import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalBody, ModalHeader } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'grey',
  border: '2px solid #000',
  p: 4,
  color: '#ccb26b',
};

export default function ModalComponente() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button class=" bg-transparent border-0" onClick={handleOpen}><h3><i class="bi bi-person-circle"></i></h3></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalBody>
          <form class="form-horizontal bg-black p-2">
                    <fieldset>
                        <legend class="text-center header text-warning"><h3><i class="bi bi-person-circle"></i></h3></legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="">Nombre: </label><input id="fname" name="Nombre" type="text" placeholder="Nombre" class="form-control"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                            <label class="">Apellido: </label><input id="apellido" name="apellido" type="text" placeholder="Apellido" class="form-control"></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="">Correo: </label><input id="correo" name="correo" type="text" placeholder="Direccion Correo" class="form-control"></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="">Contraseña: </label><input class="form-control" id="contrasena" placeholder='Contraseña'></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center mt-2">
                                <button type="submit" class="btn btn-dark btn-lg">Registrarse</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
          </ModalBody>
        </Box>
      </Modal>
    </div>
  );
}