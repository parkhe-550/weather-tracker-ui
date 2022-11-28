import { getEmail } from "../../utilities/util";

export const DashboardComponent = (props) => {
    const user = getEmail() || '';
    return (
        <div className="container">
            <div className='row mt-2'>
                <div className='col-12'>
                    <div className='card shadow-md mb-1 bg-body rounded'>
                        <div className='card-header bg-info bg-gradient justify-content-md-between'>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="p-2"> Welcome to weather portal</div>
                                <div className="p-2"> Current user: {user}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}