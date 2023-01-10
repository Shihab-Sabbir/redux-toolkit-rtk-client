import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth, setLogout } from '../../features/authSlice';
function Navbar() {
    const { token,role } = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='h-[60px] w-screen bg-slate-400'>
            <ul className='h-full w-full flex gap-4 justify-end items-center px-4'>
                <li> {!token ? <Link to='/login'>Login</Link> : <p className='cursor-pointer' onClick={() => { dispatch(setLogout()); navigate('/login') }}>Logout</p>}</li>
                {token && <li><Link to={`/dashboard-${role}`}>Dashboard</Link></li>}
            </ul>
        </div>
    )
}

export default Navbar;