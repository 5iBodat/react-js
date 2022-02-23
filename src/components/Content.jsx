import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Videos from "./Video";
import People from "./People";
import Documents from "./Documents";
import Siteinfo from "./Siteinfo";

export default class Content extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Videos />
                        <People />
                        <Documents />
                    </Col>
                    <Col md={4}>
                        <Siteinfo />
                    </Col>
                </Row>
            </Container >
        )
    }
}
