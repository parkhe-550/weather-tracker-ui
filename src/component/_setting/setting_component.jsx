import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isUserLogin } from '../../utilities/auth';
import { URL, getEmail,setItem,isEmailAddress } from '../../utilities/util';
import { changeSetting } from '../../services/api_service_provider';
export const SettingComponent = (props) => {
    const [preferences, setPreferences] = useState('-1');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {

        if (!isUserLogin()) {
            navigate(URL.login);
        }
    }, [useLocation()])
    const onChange = (evn) => {
        setPreferences(evn.target.value);
        setError(null)

    };
    const onChangeSetting = async () => {
        if (preferences !== '-1') {
            setError(null);
            let email = getEmail();
            if (isEmailAddress(email)) {
                const requestBody = {
                    emailId: email,
                    notification:preferences
                };
                const response = await changeSetting(requestBody);
                console.info("response",response);
                if(response?.status === 200){
                    setItem("USER_PREFERENCE",requestBody.notification)
                    console.info("URL.base",URL.base)
                    navigate(URL.base);
                }else{
                    setError("Something went wrong...!");
                }
            } else {
                setError("User is not valid");
            }
        } else {
            setError("Please select valid preferences");
        }
    };
    return (
        <div className="container">
            <div className='row mt-5'>
                <div className='col-4 offset-3'>
                    {error ? <div className='alert alert-danger'><strong className='fa fa-exclamation-triangle'></strong>&nbsp;{error}</div> : null}
                    <div className='card shadow-lg mb-5 bg-body rounded'>
                        <div className='card-header bg-info bg-gradient'>
                            <h5 className='card-title text-left'>User Preferences</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <select value={preferences}
                                    className="form-select form-select-md mb-3 form-control border-end-0 border rounded-pill"
                                    aria-label=".form-select-lg example"
                                    onChange={onChange}>
                                    <option value="-1">select preferences</option>
                                    <optgroup label='Application Notification'>
                                        <option value="emailNotification">Email Notification</option>
                                        <option value="appNotification">App Notification</option>
                                    </optgroup>
                                    <optgroup label='Text Message Alert'>
                                        <option value="smsNotification">SMS Alert</option>
                                    </optgroup>
                                    <optgroup disabled={true} label='Mobile Device Notification'>
                                        <option value="pushNotification">Push Notification</option>
                                    </optgroup>
                                </select>
                                <span className="input-group-append">
                                    <button onClick={onChangeSetting} className="ml3 btn btn-outline-secondary bg-info border-start-0 border rounded-pill ms-n3" type="button">
                                        Change&nbsp;<i className="fa fa-cog"></i>
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