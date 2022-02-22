import React, { Component } from 'react';

import { Container, Nav, Row, Col } from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
        return (
            <Container>
                <Row
                    className='mb-4'
                >

                    <Col>
                        <Nav
                            className="justify-content-between m-0"
                        >
                            <Nav.Item>
                                <Nav.Link href="#videos">Videos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#People">People</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Documents">Documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Events">Events</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Channels">Communities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Channels">Favorites</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Channels">Channels</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>

        )
    }
}