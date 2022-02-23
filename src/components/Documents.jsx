import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";

import axios from 'axios';

import "../style/document.css";

const Documents = () => {
    const [documents, setDocuments] = useState([]);

    function fetchData() {
        axios.get('https://6215ea707428a1d2a3543079.mockapi.io/documents')
            .then(res => {
                setDocuments(res.data);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Row className='mb-5'>
            <Col md={12}>
                <div className="content-header" id="Documents">
                    <div className="title-content-header">Documents</div>
                    <div className="view-all-header"><a href="#">Browse all documents</a></div>
                </div>
            </Col>
            <Col md={12}>
                <div className="content-body">
                    {documents.map((documents) => (
                        <div className='frame-img' key={documents.id}>
                            <img src={documents.img} alt="img-documents" />
                            <span className='title-frame-img-docu'>{documents.name}</span>
                            <span className='author-frame-img-docu'>{documents.author}</span>
                            <span className='views-frame-img-docu'>{documents.views} views</span>
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
