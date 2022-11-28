import { useState } from 'react';
import { getEmail } from '../../utilities/util';
export const NotificationStatusComponent=(props)=>{
    const [collapse, setCollapse] = useState(false);
    return (
        <div className="container">
            <section className="mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title font-weight-bold">Notification Status</h6>
                        <p className="card-text">{props?.element?.time}</p>
                       
                        <div className={`collapse${collapse ? '' : 'show'}`} id="collapseContent1">
                            <table className="table table-borderless table-sm mb-0">
                                <tbody>
                                    <tr>
                                        <td className="font-weight-normal align-middle">
                                        <i className="fa fa-envelope fa-lg text-warning"></i>
                                        </td>
                                        <td className="float-end font-weight-normal">
                                            <p className="mb-1">{getEmail()}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-normal align-middle">
                                            Status
                                        </td>
                                        <td className="float-end font-weight-normal">
                                            <p className="mb-1">{props?.element?.notification?"Sent": "Pending"}</p>
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