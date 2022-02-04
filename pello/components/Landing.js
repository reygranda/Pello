import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';
import Typewriter from 'typewriter-effect';
import { Row, Col, Nav, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import SignupPage from '../pages/SignupPage';
import { Animated } from 'react-animated-css';

export default function Landing() {
  return (
    <div>
      <Container fluid>
        <Row className="m-5">
          <Col>
            <div className={styles.headLine}>
              <Animated animationOut="fadeOut" isVisible={true}>
                <Typewriter
                  options={{
                    strings: [
                      'Project Management System & Team Communication Platform.',
                    ],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 5,
                    delay: 50,
                    pauseFor: 1000000,
                  }}
                />
              </Animated>
            </div>
            <br />
            <br />

            <p className={styles.subHeadLine}>
              The most effecient way to organize & communciate on projects.
            </p>
            <br />
            <div className="d-flex flex-grow align-items-center">
              <Animated
                animationOut="fadeOut"
                animationOutDelay={50}
                isVisible={true}
              >
                <Link href="SignupPage">
                  <Button className={styles.Btn}>Sign Up</Button>
                </Link>
              </Animated>
              <p className="mb-0 ms-5">
                Already have an account?{' '}
                <a style={{ textDecoration: 'underline' }} href="#">
                  Log in here.
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
