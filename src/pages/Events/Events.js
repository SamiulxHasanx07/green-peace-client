import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Events = () => {

    const [events, setEvents] = useState([])

    // fetch(`https://grean-peace-2022.herokuapp.com/event/${id}`)

    useEffect(() => {
        fetch('https://grean-peace-2022.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [events])

    const handleDelete = (id) => {
        console.log(id);
        const url = `https://grean-peace-2022.herokuapp.com/event/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                const remain = events.filter(event => event._id !== id);
                setEvents(remain)

            })
        toast.error('Event Delete Success!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className='py-5'>
            <h2 className='text-center mb-4'>Manage Event Events</h2>
            <Container>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Event Name</th>
                            <th>Event Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map(event => <tr key={event._id}>
                                <td>{event._id.slice(18, 22)}</td>
                                <td>{event.eventName}</td>
                                <td>
                                    <img style={{ width: '40px' }} src={event.image} alt="" />
                                </td>
                                <td className='text-center'><button onClick={() => handleDelete(event._id)} className='btn btn-danger'>X</button></td>
                            </tr>)
                        }

                    </tbody>
                </Table>
                <ToastContainer></ToastContainer>
            </Container>
            {/* <AllEvents></AllEvents> */}
        </div>
    );
};

export default Events;