import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuth } from '../features/authSlice';

function UserRoute({ children }) {
    const { role, token } = useSelector(selectAuth);
    const navigate = useNavigate();

    if (role === 'user' && token) {
        return children;
    }
    else {
        toast.error('Unauthorized access !!');
        return navigate('/')
    }

}

export default UserRoute;