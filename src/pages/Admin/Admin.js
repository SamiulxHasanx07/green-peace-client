import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import AddEvents from './AddEvents/AddEvents';
import ManageEvents from './ManageEvents/ManageEvents';
import MyEvents from './MyEvents/MyEvents';
import logo from '../../images/logos/green-peace-logo.png'
import { faListCheck, faCalendarDays, faCalendarPlus, faArrowRightFromBracket, faBorderAll, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Register from '../Auth/Register/Register'
import Voulenteers from '../Voulenteers/Voulenteers';

const Admin = () => {
    const [addEvents, setAddEvents] = useState('');
    const [events, setEvents] = useState('');
    const [manageEvents, setManageEvents] = useState('');
    const [manageVolunteers, setManageVolunteers] = useState('');


    const handleAddEvent = () => {
        setAddEvents('added');
        setEvents(' ')
        setManageEvents('')
        manageVolunteers('')
    }
    const handleMyEvents = () => {
        setEvents('added')
        setAddEvents('')
        setManageEvents('')
        setManageVolunteers('')
    }

    const handleMnageEvents = () => {
        setEvents('')
        setAddEvents('')
        setManageEvents('added')
        setManageVolunteers('')
    }

    const handleDashboard = () => {
        setEvents('')
        setAddEvents('')
        setManageEvents('')
        setManageVolunteers('')
    }
    const handleVlounteers = () => {
        setEvents('')
        setAddEvents('')
        setManageEvents('')
        setManageVolunteers('added')
    }

    return (
        <div>
            <div className='d-flex'>
                <div style={{ width: '250px', minHeight: '100vh' }} className='admin-left-bar bg-dark py-4 px-2 d-flex flex-column align-items-start'>
                    <Link to='/'><img className='w-75 bg-white py-2 px-2 ms-3 mb-3' src={logo} alt="" /></Link>
                    <p onClick={handleDashboard} className='btn  mb-3'><span className='me-2'><FontAwesomeIcon icon={faBorderAll} /></span>Dashboard</p>
                    <p onClick={handleAddEvent} className='btn  mb-3'><span className='me-2'><FontAwesomeIcon icon={faCalendarPlus} /></span>Add Events</p>
                    <p onClick={handleMyEvents} className='btn  mb-3'><span className='me-2'><FontAwesomeIcon icon={faCalendarDays} /></span>My Events</p>

                    <p onClick={handleMnageEvents} className='btn  mb-3'> <span className='me-2'><FontAwesomeIcon icon={faListCheck} /></span> Manage Events</p>

                    <p onClick={handleVlounteers} className='btn  mb-3'> <span className='me-2'><FontAwesomeIcon icon={faUser} /></span>Volunteer</p>

                    <p className='btn mb-3' onClick={() => signOut(auth)
                    }><span className='me-2'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>Logout</p>
                </div>
                <div className='w-100 px-5'>
                    <h2 className='text-center py-5'>Admin Page</h2>

                    <div className={addEvents == 'added' ? 'd-block' : 'd-none'}>
                        <AddEvents></AddEvents>
                    </div>

                    <div className={events == 'added' ? 'd-block' : 'd-none'}>
                        <MyEvents></MyEvents>
                    </div>
                    <div className={manageEvents == 'added' ? 'd-block' : 'd-none'}>
                        <ManageEvents></ManageEvents>
                    </div>

                    <div className={manageVolunteers == 'added' ? 'd-block' : 'd-none'}>
                        <Voulenteers></Voulenteers>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Admin;