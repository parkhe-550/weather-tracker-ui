import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { validateAuthUrl } from "../../utilities/auth";
import { getEmail, isUserHasPreferences } from "../../utilities/util";
import { DashboardComponent } from "../_dashboard/dashboard_component";

export const PrivateComponent = (props) => {
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let url = validateAuthUrl();
        setValid(url === null)
        if (url) {
            navigate(url);
        }
    }, [useLocation()])
    return (
        <>{valid ? <DashboardComponent {...props} /> : null}</>
    );
}