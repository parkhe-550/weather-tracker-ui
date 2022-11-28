import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../services/api_service_provider';
import { isEmailAddress, setItem, URL } from '../../utilities/util';
import './login.css'
export const LoginComponent = (props) => {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const onChange = (evn) => {
        setUserId(evn.target.value);
        setError(null)

    };
    const onLogin = async () => {
        let isValid = isEmailAddress(userId);
        if (isValid) {
            setError(null);
            const userData = await loginAction(userId);
            if (userData?.isError) {
                setError(userData.error);
            } else {
                setItem("EMAIL", userId);
                const userPreference = userData?.preference || null;
                if (userPreference) {
                    setItem("USER_PREFERENCE", userPreference);
                    navigate(URL.base)
                } else {
                    navigate(URL.setting)
                }

            }
        } else {
            setError("Please enter valid email address")
        }
    };
    return (
        <div className="container">
            <div className='row mt-5'>
                <div className='col-6 offset-3'>
                    {error ? <div className='alert alert-danger'><strong className='fa fa-exclamation-triangle'></strong>&nbsp;{error}</div> : null}
                    <div className='card shadow-lg mb-5 bg-body rounded'>
                        <div className='card-header bg-info bg-gradient'>
                            <h3 className='card-title text-center'>Weather Tracker Sign In</h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <input onChange={onChange}
                                    placeholder='Enter your email address'
                                    value={userId} className="form-control border-end-0 border rounded-pill"
                                    type="text" id="example-search-input" />
                                <span className="input-group-append">
                                    <button onClick={onLogin} className="btn btn-outline-secondary bg-info border-start-0 border rounded-pill ms-n3" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}