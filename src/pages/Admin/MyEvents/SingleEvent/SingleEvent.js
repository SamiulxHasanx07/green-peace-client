import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const SingleEvent = ({ event }) => {
    const { image, eventName, _id } = event;

    const handleEventDelete = (id) => {
        const url = `http://localhost:5000/selected?_id=${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ _id: id })
        })
            .then(res => res.json())
            .then(res => {
                toast.error('Event Delete Success!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <button onClick={() => handleEventDelete(_id)} className="btn btn-danger">Delete</button>
                    </Card.Body>
                </Card>
            </Col>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleEvent;