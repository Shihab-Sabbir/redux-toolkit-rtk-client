import React from 'react'
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/authSlice';

function DashboardMember() {
    const selector = useSelector(selectAuth)
    return (
        <div>
            <p>{selector.username}</p>
            <p>{selector.role}</p>
        </div>
    )
}

export default DashboardMember;