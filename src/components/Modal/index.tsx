import React, { useState } from 'react';

import { Modal, Button, Row, Col } from 'react-bootstrap';

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ isVisible, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={isVisible}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalContent;
