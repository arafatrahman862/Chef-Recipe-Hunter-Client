import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
const handleRegister = event =>{

    
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

setError('');
    if(password.length < 6){
        setError('password must be 6 characters or larger')
        return
    }

    createUser(email, password)
    .then(result =>{
        const loggedUser = result.user;

    })
    .catch(error =>{
        console.error(error);
        setError(error.message)
    })
}

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' required placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        
                        <div className='mx-2 mb-3 p-1'>
                        Already have an account? Please <Link to="/login"><span className='underline text-blue-600'>Login</span></Link>
                        </div>
                        <p className='text-red-600 m-2'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;