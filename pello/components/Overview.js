import React from 'react';
import { Animated } from 'react-animated-css';
import { Card, ProgressBar, Col, Row, Button } from 'react-bootstrap';
import styles from '../styles/Overview.module.css';

export default function Overview() {
  return (
    <Animated animationIn="fadeIn">
      <Row>
        <Col>
          <h1 style={{ fontWeight: 'bold' }}>Hello, Rey</h1>
          <p>Today is Monday, 2 February 2022</p>
        </Col>
        <Col>
          <Button className={styles.btn} style={{ marginLeft: '30px' }}>
            Log Out
          </Button>
          <Button className={styles.btn}>Add Task</Button>
        </Col>
      </Row>
      <Row style={{ width: '100%', marginTop: '50px' }}>
        <Card
          style={{
            width: '250px',
            height: '200px',
            padding: '30px 25px',
            border: 'none',
            boxShadow: '0 6px 20px 0px #7A7A7A',
          }}
        >
          <Card.Title style={{ fontWeight: 900, fontSize: '24px' }}>
            Web Development
          </Card.Title>
          <ProgressBar style={{ marginTop: '20px' }} variant="dark" now={60} />
          <p style={{ paddingTop: '10px' }}>10 Tasks | 60%</p>
        </Card>
      </Row>
      <Row style={{ marginTop: '40px' }}>
        <h3
          style={{
            fontWeight: 'bold',
            marginBottom: '30px',
            marginTop: '50px',
          }}
        >
          Your Tasks{' '}
        </h3>
        <Card
          style={{
            width: '300px',

            border: 'none',
            boxShadow: '0 6px 20px 0px #7A7A7A',
            padding: '30px 25px',
          }}
        >
          <Card.Title class="align-middle" style={{ fontWeight: 'bold' }}>
            Upload IMG
          </Card.Title>
        </Card>
      </Row>
    </Animated>
  );
}
