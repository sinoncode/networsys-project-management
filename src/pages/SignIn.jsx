import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo/logo4.png'
import login from '../assets/images/authentication/login-img.jpg'

export const SignIn = () => {
  const [email, setEmail] = useState('admin@networsys.com');
  const [password, setPassword] = useState('admin.networsys');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    navigate('/dashboard');
  };

  return (
    <main className="container-fluid px-0">
      {/* Project Logo */}
      {/* <div className="px-xl-5 px-4 auth-header" data-bs-theme="none">
        <Link to="/" className="brand-icon text-decoration-none d-flex align-items-center" title="Networsys Admin Template">

                       
        </Link>
      </div> */}



      {/* Auth Body */}
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-none d-lg-flex justify-content-center align-items-center">
            <img src={login} alt="" className='w-100' srcset="" />
          </div>
           <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="logo" />
             <div className="px-xl-5 px-4 auth-body">
        <form onSubmit={handleSignIn}>
          <ul className="row g-3 list-unstyled li_animate">
            <li className="col-12">
              <h1 className="h2 title-font">Welcome to Networsys</h1>
            </li>
            <li className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="col-12">
              <div className="form-label">
                <span className="d-flex justify-content-between align-items-center">
                  Password
                  <Link className="text-primary" to="/password-reset">
                    Forgot Password?
                  </Link>
                </span>
              </div>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="col-12">
              <div className="form-check fs-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Rememberme"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label fs-6" htmlFor="Rememberme">
                  Remember this Device
                </label>
              </div>
            </li>
            <li className="col-12 my-lg-2">
              <button
                type="submit"
                className="btn btn-lg w-100 btn-info fw-bolder mb-2"
                title="sign in"
              >
                SIGN IN
              </button>
              <a className="btn btn-lg btn-secondary w-100" href="#">
                <i className="fa fa-google me-2" />
                <span>Sign in with Google</span>
              </a>
            </li>
            <li className="col-12">
              <span className="text-muted d-flex d-sm-inline-flex">
                New to Networsys{' '}
                <Link className="ms-2" to="/signup" title="">
                  Sign up here
                </Link>
              </span>
            </li>
          </ul>
        </form>
      </div>
           </div>
        </div>
      </div>
     

      {/* Footer */}
      {/* <footer className="px-xl-5 px-4">
        <p className="mb-0 text-muted">
          © 2026{' '}
          <a href="https://Networsys Technologies LLP.com/" target="_blank" rel="noreferrer" title="Networsys Technologies LLP">
            Networsys Technologies LLP
          </a>
          , All Rights Reserved.
        </p>
      </footer> */}
    </main>
  );
};
