import { useState } from 'react';
export const WeatherCardComponent=(props)=>{
    const [collapse, setCollapse] = useState(false);
    const data = props?.data;
    const current = data?.current_condition[0];
    const timZone = data?.time_zone[0];
    const area= data?.nearest_area[0];
    const getArea=()=>{
        let areas=area?.city || null;
        if(areas && area?.state){
            areas += `, ${area.state }`
        }
        if(areas && area?.countryName){
            areas += `, ${area.countryName}`
        }
        return areas;
    }
    return (
        <div className="container">
            <section className="mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold area-display">{getArea()}</h5>
                        <p className="card-text">{timZone?.dayHours}, {current?.weatherDesc?.[0]?.value}</p>
                        <div className="d-flex justify-content-start">
                            <img className='rounded float-start weather-status-img' src={`${current?.weatherIconUrl?.[0]?.value}`}></img>
                            <p className="display-1 degree">
                                { current?.temp_C}
                            </p>
                            <i className="fas fa-sun-o fa-5x pt-3 text-warning"></i>
                        </div>
                        <div className={`collapse${collapse ? '' : 'show'}`} id="collapseContent1">
                            <table className="table table-borderless table-sm mb-0">
                                <tbody>
                                    <tr>
                                        <td className="font-weight-normal align-middle">Time zone: {timZone?.zone}</td>
                                        <td className="float-end font-weight-normal">
                                            <p className="mb-1">{current?.feelsLikeC}&deg;<span className="text-muted">/{current?.feelsLikeF}&deg;</span></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};