import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuth, setUser } from '../features/authSlice';
import { useLoginUserMutation } from '../Services/authApi';

function Login() {
    const [loginUser, { isError, isLoading, data, error, isSuccess }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginSelector = useSelector(selectAuth);

    console.log(loginSelector)
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await loginUser({ email, password })
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Login Successful')
            dispatch(setUser(data))
            if (data.role === 'admin') { return navigate('/dashboard-admin') }
            if (data.role === 'user') { return navigate('/dashboard-user') }
            if (data.role === 'member') { return navigate('/dashboard-member') }
        }
    }, [isSuccess])
    console.log(loginSelector)
    useEffect(() => {
        if (isError) {
            toast.error(error.message)
        }
    }, [isError])


    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;