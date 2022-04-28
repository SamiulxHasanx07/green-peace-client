import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleEvent from './SingleEvent/SingleEvent';
// import ChildSupport from '../../../images/images/childSupport.png';
// import RefugeShelter from '../../../images/images/refuseShelter.png';
// import FoodCharity from '../../../images/images/foodCharity.png';
// import ClothSwap from '../../../images/images/clothSwap.png';
import 'react-toastify/dist/ReactToastify.css';
const AllEvents = () => {
    // const eData = [
    //     { id: 1, eventName: 'Child Support', Image: ChildSupport },
    //     { id: 2, eventName: 'Refuge shelter', Image: RefugeShelter },
    //     { id: 3, eventName: 'Food Charity', Image: FoodCharity },
    //     { id: 4, eventName: 'Host a clothing swap', Image: ClothSwap },
    // ]

    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://grean-peace-2022.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);


    return (
        // style={{marginTop:'-100px'}}
        <div className='mb-5'>
            <Container>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        events.map(event => <SingleEvent key={event._id} event={event}></SingleEvent>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllEvents;