import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuth } from '../features/authSlice';

function AdminRoute({ children }) {
    const { role, token } = useSelector(selectAuth);
    const navigate = useNavigate();
    window.onload = () => {
        console.log('Loading....')
        return <p>Loading....</p>
    }

    if (role === 'admin' && token) {
        return children;
    }
    else {
        toast.error('Unauthorized access !!');
        return navigate('/')
    }

}

export default AdminRoute;