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
import LoginModal from './LoginModal';

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
                <Button onClick={handleShow} className={styles.btn}>
                  <LoginModal />
                </Button>
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
