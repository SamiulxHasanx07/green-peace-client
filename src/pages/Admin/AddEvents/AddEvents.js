import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const AddEvents = () => {

    const handleAddEvent = (e) => {
        e.preventDefault();
        const eventName = e.target.eventName.value;
        const eventPhoto = e.target.eventPhoto.value;
        const eventData = { eventName, image: eventPhoto }

        if (eventName.length > 3 && eventPhoto.length > 3) {

            fetch('https://grean-peace-2022.herokuapp.com/event', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                })

            toast.success('Event Added!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            e.target.reset();
        }

    }

    return (
        <div>
            <Container>
                <h2 className='text-center'>Add Events</h2>
                <Form onSubmit={handleAddEvent} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEvent">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control name='eventName' type="text" placeholder="Event Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Evant Image</Form.Label>
                        <Form.Control name='eventPhoto' type="text" placeholder="Add Event Photo Url" />
                    </Form.Group>
                    <input className='btn btn-primary' type="submit" value="Add Event" />
                </Form>
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default AddEvents;