import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SingleEvent from './SingleEvent/SingleEvent';

const MyEvents = () => {
    const [user] = useAuthState(auth)

    const [selectedEvents, setSelectedEvents] = useState([])

    useEffect(() => {
        const url = `https://grean-peace-2022.herokuapp.com/selected?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedEvents(data))
    }, [selectedEvents])



    return (
        <div>
            <h2>My Events</h2>
            <Row xs={1} md={3} lg={6} className="g-4">
                {
                    selectedEvents.map(event => <SingleEvent key={event._id} event={event}></SingleEvent>)
                }
            </Row>
        </div>
    );
};

export default MyEvents;