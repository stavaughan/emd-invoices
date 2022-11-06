import { useMemo } from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles, access }) => {

    const location = useLocation(); 

    const allowed = useMemo(() => {
        return allowedRoles?.includes(access);
    }, [allowedRoles, access])

    return ( 
        <>
            {allowed
                ? <Outlet />
                : (
                    <Navigate
                        to={`/${access ? 'unauthorized' : ''}`}
                        state={{ from: location }}
                        replace
                    />
                )}
        </>
    );
}

export default RequireAuth;