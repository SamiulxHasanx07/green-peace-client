import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {

    const handleForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const password = e.target.pass.value;
        console.log(name, password);
    }
    return (
        <div>
            <h2 className='text-center py-3'>Please Login</h2>
            <Container>
                <Form onSubmit={handleForm} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='name' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='pass' type="password" placeholder="Password" />
                    </Form.Group>
                    <button className='btn btn-primary' type="submit">
                        Login
                    </button>
                    <p className='mt-3'>Dont Have an Account? <Link to='/register'>Register</Link></p>
                    <p>Forgot Password? <Link to='/reset'>Reset Password</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </Container>
        </div>
    );
};

export default Login;