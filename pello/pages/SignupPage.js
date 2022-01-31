import {
  Navbar,
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
} from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignupPage.module.css';
import React, { useRef, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import firebase from 'firebase';
import { Animated } from 'react-animated-css';

export default function SignupPage() {
  const [error, setError] = useState('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      console.log(emailRef.current.value);
      console.log(signup(emailRef.current.value, passwordRef.current.value));
    } catch (caughtError) {
      setError('Unable to create an account');
      console.log(caughtError);
    }
    console.log(error);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        />
      </Head>

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
              <Button className={styles.btn}>Login</Button>
            </Col>
          </Navbar>
        </Row>
        <Row className="m-5">
          <Col>
            <Animated animationIn="fadeInLeft">
              <Card className="p-5" id={styles['card']}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formFristName">
                    <Form.Label className={styles.labelNames}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name.."
                      ref={firstNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label className={styles.labelNames}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name.."
                      ref={lastNameRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmailAddress">
                    <Form.Label className={styles.labelNames}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address.."
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className={styles.labelNames}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password.."
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label className={styles.labelNames}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-Enter password.."
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Row className="justify-content-center">
                    <Button type="submit" className={styles.submitbtn}>
                      Sign Up
                    </Button>
                  </Row>
                </Form>
              </Card>
            </Animated>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
