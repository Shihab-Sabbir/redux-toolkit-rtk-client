import React from 'react'
import { toast } from 'react-toastify';
import { useRegisterUserMutation } from '../Services/authApi';

function Register() {

    const [registerUser, { isError, isLoading, data, error, isSuccess }] = useRegisterUserMutation();
console.log(error)
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = 'user';
        await registerUser({ email, password, username, role })
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isSuccess) {
        toast.success('Register Successful')
    }
    if (data) {
        console.log(data)

    }

    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name='username' placeholder='User Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;