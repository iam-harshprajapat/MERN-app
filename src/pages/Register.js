import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/features/registerAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector((state) => state.register)
    const handleSubmit = () => {
        console.log({ name, email, mobile, password });
        dispatch(registerUser({ name, email, mobile, password }));
    }

    useEffect(() => {
        if (success) {
            toast.success('Registration Successfull', {
                position: 'top-center',
            })
        }
        if (error) {
            toast.error('Unable to Register', {
                position: 'top-center',
                className: 'foo-bar'
            });
        }
    }, [error, success])
    return (
        <>
            <section className='section-1'>
                <div className='container'>
                    <h2>Register</h2>
                    <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />


                    <button type='submit' onClick={handleSubmit}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Register
