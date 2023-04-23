import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import seller from '../screens/seller.png'


export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("enter valid")
    }
    if (json.success) {
      localStorage.setItem("userEmial", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");

    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <section className='signup' >
        <div className='signupcontainer mt-5 bg-white shadow box-area'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="exampleInputEmail1">
                    <i className="zmdi zmdi-email material-icons-name" ></i>
                  </label>
                  <input type="email" autoComplete='off' placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="exampleInputPassword1">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" autoComplete='off' placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                </div>
                <div className="row">
                  <small>Don't have account? <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link></small>
                </div>
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





      {/* <div className='container'>
        
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background:"white"}}>
            <div className="featured-image">
              <img src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?w=740&t=st=1680605198~exp=1680605798~hmac=edc299fdd4dd4a737310c2d730cfc170a46626d471dc06e0ad8949949526130f" className="img-fluid" style={{ height:"400px",width:"400px", objectFit:""}}/>
            </div>
          </div>
          <div className="col-md-6 right-box">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
                  <div className="header-text mb-4">
                      <h2>Hello,Again</h2>
                      <p>We are happy to have you back.</p>
                  </div>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" name='email' value={credentials.email} onChange={onChange}/>
                  </div>
                  <div className="input-group mb-3">
                      <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
                  </div>
                  <div className="input-group mb-3">
                      <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                  </div>
                  <div className="row">
                      <small>Don't have account? <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link></small>
                  </div>
            </div>
          </form>  
        
        </div>
        
      </div>  */}
    </>
  )
}
