import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Col } from 'react-bootstrap';

export default function Footer()  {

        return (
           <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>2021-2022</div>
                    </Col>
                </Container>
           </Navbar>
        );

}
