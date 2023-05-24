import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

// Componente de modal de erro
const ModalError = ({ history, show_modal_error, msg }) => {
  return (
    // Modal que mostra o erro, centralizado
    <Modal show={show_modal_error} centered>
      {/* Corpo do modal exibindo a mensagem de erro */}
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        {/* Botão "Ok" para fechar o modal e redirecionar para a página inicial */}
        <Button variant="primary" onClick={() => history.push("/")}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
