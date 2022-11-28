import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePosition } from '../../hooks/_usePosition/usePosition';
import { fetchWeather } from '../../services/api_service_provider';
import { getEmail, getPreferences } from '../../utilities/util';
import { PushNotifyComponent } from '../_notifier/push_notify_component';
import { NotificationStatusComponent } from './notification_status_component';
import './weather.css'
import { WeatherCardComponent } from './weather_card_component';
export const WeatherComponent = (props) => {
    const { lat, lon, valid, error } = usePosition();
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (error !== null) {
            setToggle(!toggle);
            setMessage(error);
        }
        searchStatus();
    }, [lat, lon, valid, error, message, data]);

    const searchStatus = async () => {
        if (valid && data === null || data?.data === null) {
            const data = await fetchWeather({
                lat: lat, lon: lon,
                userRequest: {
                    emailId: getEmail(),
                    notification: getPreferences(),

                }
            });
            setData(data);
        }
    };
    const onToggle = () => setToggle(!toggle);
    return (<>
        {toggle ? <PushNotifyComponent onToggle={onToggle} message={message} /> : null}
        <div className='row'>
            
            <div className='col-5'><WeatherCardComponent {...data?.data} />
            </div>
            <div className='col-7'><NotificationStatusComponent  element={data?.element}  />
            </div>
        </div>
    </>);
}