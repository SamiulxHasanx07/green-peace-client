import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Container } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        console.log(error);

    }

    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin";

    if (user) {
        return <Navigate to={from} state={from} replace />
    }

    return (
        <div className="text-center py-5">

            <Container>
                <button onClick={() => signInWithGoogle()} className='btn btn-danger'>Google Singin</button>
                <button onClick={() => signInWithGoogle()} className='ms-3 btn btn-danger'>Google Singin</button>
                <button onClms-3 ick={() => signInWithGoogle()} className='ms-3 btn btn-danger'>Google Singin</button>
            </Container>
        </div>
    );
};

export default SocialLogin;