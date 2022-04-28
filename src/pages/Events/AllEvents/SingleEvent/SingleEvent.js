import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';

const SingleEvent = ({ event }) => {
    const [user] = useAuthState(auth)
    const { _id, eventName, image } = event;

    const handleSelect = (id) => {
        const data = { eventId: id, email: user.email, eventName: eventName, image: image };

        fetch('http://localhost:5000/selected', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Event Selected Done!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,

                })
            });

        console.log('samiul');
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className='bg-danger text-white' style={{ marginTop: '-15px' }}>
                        <Card.Title>{eventName}</Card.Title>
                        <div className='text-center mt-2'>
                            <button onClick={() => handleSelect(_id)} className='btn btn-warning'>Select Event</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleEvent;