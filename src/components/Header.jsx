import React, { Component } from "react";

import { Container, Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';



export default class Header extends Component {
    render() {
        return (

            <Navbar bg="transparant" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Social<span className="brand-white">Network</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex">
                            <FormControl
                                placeholder="Find..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                className="search-input"
                            />
                            <InputGroup.Text id="basic-addon2"><i className="bi-search"></i></InputGroup.Text>
                        </Form>
                        <Button className="d-flex"><i className="bi bi-arrow-up"></i> Upload</Button>
                        <Button className="d-flex"><i className="bi bi-person"></i></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}

