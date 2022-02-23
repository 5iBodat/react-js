import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";

import axios from 'axios';

import "../style/video.css";

const Video = () => {


    const [videos, setVideos] = useState([]);

    async function fetchData() {
        try {
            const res = await axios.get('https://62141c5389fad53b1f0af07f.mockapi.io/Videos');
            setVideos(res.data);
        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Row className='mb-4'>
            <Col md={12}>
                <div className="content-header">
                    Videos
                </div>
            </Col>
            <Col md={12}>
                <div className="content-body">
                    {videos.map((video) => (
                        <div className='frame-img' key={video.id}>
                            <ReactPlayer
                                onClickPreview={() => {
                                    console.log('clicked');
                                }}
                                className="react-player"
                                url={video.url}
                                width="100%"
                                height="100%"
                                controls
                            />
                            <span className='title-frame-img'>{video.video}</span>
                            <span className='author-frame-img'>{video.first_name} {video.last_name}</span>
                            <span className='views-frame-img'>{video.views} views</span>
                        </div>
                    ))}
                    <div className='frame-img'>
                        <div className="grid-item">
                            <form method="post" id="form_photo" action="" encType="multipart/form-data">
                                <label className="upload_foto">
                                    <i className="bi bi-arrow-up-circle"></i>
                                    <span className="title">Upload <br /> Your own Video</span>
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

export default Video;


// coba pake nth-child di css cardnya (nth-child(1))