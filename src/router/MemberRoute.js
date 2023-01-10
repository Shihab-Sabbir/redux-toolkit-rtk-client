import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuth } from '../features/authSlice';

function MemberRoute({ children }) {
    const { role, token } = useSelector(selectAuth);
    const navigate = useNavigate();
    if (role === 'member' && token) {
        return children;
    }
    else {
        toast.error('Unauthorized access !!');
        return navigate('/')
    }

}

export default MemberRoute;