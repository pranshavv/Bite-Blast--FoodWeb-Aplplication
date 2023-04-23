import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import seller from "../screens/seller.png"

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
                <div className='container mt-5 bg-white shadow box-area'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <label htmlFor="name" className='form-label'>
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                    
                                        <input type="text" autoComplete='off' placeholder="Enter Name" name='name' value={credentials.name} onChange={onChange} />
                                    </label>
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="exampleInputEmail1">
                                        <i className="zmdi zmdi-email material-icons-name" ></i>
                                    </label>
                                    <input type="email" autoComplete='off' placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="exampleInputAdd">
                                        <i className="zmdi zmdi-home material-icons-name"></i>
                                    </label>
                                    <input type="text" autoComplete='off' placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="exampleInputPassword1">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" autoComplete='off' placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                                </div>
                                <button type="submit" className="m-3 btn btn-primary">Submit</button>
                                <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                            </form>
                        </div>
                        <div className='signup-image'>
                            <figure>
                                <img src={seller} alt='img' />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
