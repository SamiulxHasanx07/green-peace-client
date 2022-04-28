import React from 'react';
import { Form} from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {



    const registerVolunteer = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const des = e.target.des.value;
        const org = e.target.org.value;
        const data = { name: name, email: email, date: date, des: des, org: org }
        console.log(data);



        if (name.length > 3 && email.length > 3) {
            const url = `https://grean-peace-2022.herokuapp.com/volunteers?name=${data}`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
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
        <div className='py-5'>
            <Form onSubmit={registerVolunteer} className='w-50 mx-auto px-4' style={{ border: '1px solid #e5e5e5' }}>
                <h2 className='text-center py-4'>Register as a Volunteer</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User Name Or Email</Form.Label>
                    <Form.Control name="email" type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control name='date' type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='des' type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Organize books at the library</Form.Label>
                    <Form.Control name='org' type="text" />
                </Form.Group>
                <div className='text-center mb-5'>
                    <input className='btn btn-primary w-100 mt-3 py-2' type="submit" value="Registration" />

                </div>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;