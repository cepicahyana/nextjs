import React,{useState} from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';



export default function componentName() {
  const [show , setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="container card-body">
        <div className="row">
          <div class="col-lg-6 col-12">
            
            <button >klik</button>

          </div>
          <div class="col-lg-6 col-12">kanan<br />
            <div className="alert alert-info">alert</div>
          </div>
        </div>
      </div>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container> */}

    </>
  );
}
