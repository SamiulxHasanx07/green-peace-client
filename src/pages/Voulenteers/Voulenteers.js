import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
const Voulenteers = () => {
    const [voulenteers, setVoulenteers] = useState([])
    useEffect(() => {
        fetch('https://grean-peace-2022.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setVoulenteers(data))
        console.log(voulenteers);
    }, [])



    const deleteVoluenteer = (id) => {
        const url = `https://grean-peace-2022.herokuapp.com/deletevolunteers?_id=${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                const remain = voulenteers.filter(voulenteer => voulenteer._id !== id);
                setVoulenteers(remain)
                toast.error('Event Delete Success!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }

    return (
        <div>
            <Container>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email/UserName</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Organize </th>
                            <th>Delete/Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            voulenteers.map(voulenteer => <tr key={voulenteer._id}>
                                <td>{voulenteer.name}</td>
                                <td>{voulenteer.email}</td>
                                <td>{voulenteer.date}</td>
                                <td>{voulenteer.des}</td>
                                <td>{voulenteer.org}</td>
                                <td className='text-center'>
                                    <button className='btn btn-danger me-2'><FontAwesomeIcon icon={faPencil} /></button>
                                    <button onClick={() => deleteVoluenteer(voulenteer._id)} className='btn btn-danger'>X</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Voulenteers;