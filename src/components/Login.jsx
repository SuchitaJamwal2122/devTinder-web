import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login",{ emailId, password },{withCredentials: true});
            dispatch(addUser(res.data));
            return navigate("/");
        }
        catch(err) {
            setError(err?.response?.data || "Something went wrong");
        }
    };

    const handleSignup = async () => {
        try {
            const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password}, {withCredentials: true});
            dispatch(addUser(res.data.data));
            return navigate("/profile");
        }
        catch(err) {
            console.error(err.message);
        }
    }

  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-center">{ isLoginForm ? "Login" : "Sign Up"}</h2>
                <div>
                    { !isLoginForm && <> <fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name</legend>
                        <input type="text" value={firstName} className="input" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)}/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name</legend>
                        <input type="text" value={lastName} className="input" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)}/>
                    </fieldset> </>}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Id</legend>
                        <input type="text" value={emailId} className="input" placeholder="Enter your email id" onChange={(e) => setEmailId(e.target.value)}/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" value={password} className="input" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                    </fieldset>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignup}>{isLoginForm ? "Login" : "SignUp"}</button>
                </div>
                <p className='m-auto cursor-pointer' onClick={() => setIsLoginForm((value) => !value)}>{isLoginForm ? "New User? Signup here." : "Existing User? Login here"}</p>
            </div>
        </div>
    </div>
  )
}

export default Login