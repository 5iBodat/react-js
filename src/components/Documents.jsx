import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";

import axios from 'axios';

import "../style/people.css";

const Documents = () => {
    const [people, setPeople] = useState([]);

    function fetchDataPeople() {
        axios.get('https://62141c5389fad53b1f0af07f.mockapi.io/People')
            .then(res => {
                setPeople(res.data);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }

    useEffect(() => {
        fetchDataPeople();
    }, [])

    return (
        <Row className='mb-4'>
            <Col md={12}>
                <div className="content-header">
                    Documents
                </div>
            </Col>
            <Col md={12}>
                <div className="content-body">
                    {people.map((person) => (
                        <div className='frame-img' key={person.id}>
                            <img src={person.avatar} alt="img-people" />
                            <span className='title-frame-img-people'>{person.name}</span>
                            <span className='author-frame-img-people'>{person.jobs}</span>
                            <span className='views-frame-img-people'>{person.views} views</span>
                        </div>
                    ))}
                    <div className='frame-img'>
                        <div className="grid-item">
                            <form method="post" id="form_photo" action="" encType="multipart/form-data">
                                <label className="upload_foto">
                                    <i className="bi bi-arrow-up-circle"></i>
                                    <span className="title">Share <br /> Your Document</span>
                                    <input type="file" name="userfile" accept="image/gif,image/jpg,image/png,image/jpeg" />
                                </label>
                            </form>
                        </div>
                    </div>

                </div>
            </Col>
        </Row >
    )
}

export default Documents;
