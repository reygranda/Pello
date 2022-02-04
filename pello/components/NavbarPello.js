import React, { useContext, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  Modal,
} from 'react-bootstrap';
import styles from '../styles/NavbarPello.module.css';
import Link from 'next/link';
import { useAuth } from '../pages/contexts/AuthContext';

export default function NavbarPello() {
  const { currentUser, login, logout } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid>
        <Row className="m-5">
          <Navbar>
            <Col>
              <Link href="/">
                <Navbar.Brand style={{ fontWeight: 900, fontSize: 40 }}>
                  Pello.
                </Navbar.Brand>
              </Link>
            </Col>
            <Col>
              {!currentUser && (
                <div>
                  <Button onClick={handleShow} className={styles.btn}>
                    Login
                  </Button>

                  <Modal
                    className="d-flex align-items-center"
                    show={show}
                    onHide={handleClose}
                    id={styles['modal']}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ fontWeight: 'bold' }}>
                        Login
                      </Modal.Title>
                    </Modal.Header>

                    <Form className={styles.modalForm}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Form>

                    <Modal.Footer className="justify-content-center">
                      <Button
                        className={styles.btn}
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}

              {currentUser && (
                <Button onClick={logout} className={styles.btn}>
                  Log Out
                </Button>
              )}
            </Col>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}
