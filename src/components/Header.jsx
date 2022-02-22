import React, { Component } from "react";

import { Container, Navbar, InputGroup, FormControl, Button } from 'react-bootstrap';



export default class Header extends Component {
    render() {
        return (
            <Navbar bg="transparant" className="mb-4">

                <Container>

                    <Navbar.Brand href="#home">
                        Social<span className="brand-white">Network</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <InputGroup>
                            <FormControl
                                placeholder="Find..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                className="search-input"
                            />
                            <InputGroup.Text id="basic-addon2"><i className="bi-search"></i></InputGroup.Text>
                        </InputGroup>
                        <Button className="d-flex"><i className="bi bi-arrow-up"></i> Upload</Button>
                        <Button className="d-flex"><i className="bi bi-person"></i></Button>
                        <span>Sahat</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        );
    }
}

