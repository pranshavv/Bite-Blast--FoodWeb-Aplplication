import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../Assets/login.png'
import PersonIcon from '@mui/icons-material/Person';
import AddHomeIcon from '@mui/icons-material/AddHome';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { colors } from '@mui/material';

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("enter valid")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <section className='signup' >
                <div className='container' style={{padding: '0 0 0 0',marginTop:'2rem'}}>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                    <PersonIcon fontSize='medium' style={{ margin: '13px', color:'black' }}/>
                                    </label>
                                    <input type="text" autoComplete='off' placeholder="Enter Name" name='name' value={credentials.name} onChange={onChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                    <EmailIcon fontSize='medium' style={{ margin: '13px', color:'black' }}/>
                                    </label>
                                    <input type="email" autoComplete='off' placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputAdd">
                                    <AddHomeIcon fontSize='medium' style={{ margin: '13px', color:'black' }}/>
                                    </label>
                                    <input type="text" autoComplete='off' placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                    <PasswordIcon fontSize='medium' style={{ margin: '13px', color:'black' }}/>
                                    </label>
                                    <input type="password" autoComplete='off' placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                                </div>
                                <button type="submit" className="btn-submit">Submit</button>
                                <Link to="/login" className='btn-already'>Already a user</Link>
                            </form>
                        </div>
                        <div className='signup-image'>
                            <figure>
                                <img src={login} alt='img' />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
