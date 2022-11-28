export const PushNotifyComponent = (props) => {
    return (
        <div className="position-fixed top-0 end-0 toast align-items-center push-notifier show" 
        role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className={`toast-body ${props.isError?'text-danger':''}`}>
                    {props.message}
                </div>
                <button type="button" className="btn-close me-2 m-auto" 
                data-bs-dismiss="toast" aria-label="Close" onClick={()=>props.onToggle()}></button>
            </div>
        </div>
    )
}