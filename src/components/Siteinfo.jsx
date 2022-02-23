import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";

import axios from 'axios';

import moment from 'moment';

const Siteinfo = () => {



    const [channel, setChannels] = useState([])
    const [activity, setActivity] = useState([]);

    function fetchDataActivity() {
        axios.get('https://62141c5389fad53b1f0af07f.mockapi.io/activity')
            .then(res => {
                setActivity(res.data);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }

    function fetchDataChannel() {
        axios.get('https://62141c5389fad53b1f0af07f.mockapi.io/channel')
            .then(res => {
                setChannels(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    function deleteActivity(id, e) {
        e.preventDefault();
        axios.delete(`https://62141c5389fad53b1f0af07f.mockapi.io/activity/${id}`)
            .then(res => {
                fetchDataActivity();
            })
    }

    useEffect(() => {
        fetchDataActivity();
        fetchDataChannel();
    }, []);
    return (
        <Row>
            <Col md={12} className="mb-4">
                <div className="content-side-header">
                    Activity
                </div>
                <div className="content-side-body mt-2">
                    {activity.map((i) => (
                        <div className="card card-activity flex-row text-white" key={i.id}>
                            <img className="card-img-sm-left example-card-img-responsive" src={i.avatar} alt="profile-images" />
                            <div className="card-body card-body-activity">
                                <div className="card-name">
                                    <div className="card-title h6 h4-sm ">{i.first_name} {i.last_name}</div>
                                    <div className='status'>{i.status}</div>
                                </div>
                                <div className="card-text">{i.pesan}</div>
                                <span className="card-text-momen">{moment().startOf(i.createdAt).fromNow()}</span>
                            </div>
                            <div className='button-delete' onClick={(e) => deleteActivity(i.id, e)}><i class="bi bi-x"></i></div>
                        </div>
                    ))}
                </div>
            </Col>
            <Col md={12}>
                <div className="content-side-header">
                    Channels
                </div>
                <div className="content-side-body mt-2">
                    <Row>
                        {channel.map((i) => (
                            <Col md={6} sm={6} className="mb-4 col-6" key={i.id}>
                                <div className="channel-card">
                                    <img className="img" src={i.avatar} alt="avatar" />
                                    <div className="channel-card-body">
                                        <div className="title-channel">{i.name}</div>
                                    </div>
                                    <div className='button-delete'><i class="bi bi-x"></i></div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
        </Row >
    )
}

export default Siteinfo;