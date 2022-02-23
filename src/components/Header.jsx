import React, { Component } from "react";

import { Container, Navbar, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';



export default class Header extends Component {
    render() {
        return (

            <Navbar bg="transparant" expand="lg" variant="dark" className="mb-4">
                <Container>
                    <Navbar.Brand href="#home" className="w-20">
                        Social<span className="brand-white">Network</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Row className="w-100 justify-content-between head">
                            <Col md={7}><Form className="d-flex">
                                <FormControl
                                    placeholder="Find..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    className="search-input"
                                />
                                <InputGroup.Text id="basic-addon2"><i className="bi-search"></i></InputGroup.Text>
                            </Form>
                            </Col>
                            <Col md={2}>
                                <Button className="d-block w-100 upload-head"><i className="bi bi-arrow-up"></i> Upload</Button>
                            </Col>
                            <Col md={3} className="d-inline-flex">
                                <Button className="d-flex user-head"><i className="bi bi-person"></i></Button>
                                <div className="text-user"><span className="first-name">Sahat</span> <br /><span className="last-name">Marbun</span></div>
                            </Col>

                        </Row>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}

