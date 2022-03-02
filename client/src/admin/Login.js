import React, { Component } from "react";
import './auth.css'
import { useNavigate } from 'react-router-dom';
import { AppsConst } from './AppsConst';

export default function Login (){

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();

    async function loginUser(credentials) {

        const cred = {
            "username": credentials.userName,
            "password": credentials.password
        }

        console.log(cred);
        return fetch('http://localhost:5002/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cred)
        })
            .then(data => { 
                data.json()
                .then(function(result) {
                    if (result.accessToken){
                        AppsConst.user = result
                        navigate('/profile')
                    }
                 })

            })

    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            password,
        });
    }

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => {
                    setUserName(e.target.value)
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => {
                    setPassword(e.target.value)
                }}
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
}
