import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Donation = () => {
    return (
        <div className='py-5'>
            <h2 className="text-center">Donate Now</h2>
            <Container>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter Card Number" />
                    </Form.Group>

                    <div className='d-flex justify-content-between'>
                        <Form.Group className="mb-3" controlId="formBasicAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPinCode">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="password" placeholder="Pin Code" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms and Condition" />
                    </Form.Group>
                    <div className='text-center'>
                        <input className='btn btn-danger' type="submit" value="Donate Now" />
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Donation;