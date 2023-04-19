import React, { ReactNode } from 'react';
import { useAppSelector} from "../../hooks/redux";
import {Navigate, useLocation} from "react-router-dom";

interface PropsWithChildren {
    children: ReactNode;
}

const AuthHoc: React.FC<PropsWithChildren> = (props) => {
    const isAuth = useAppSelector(state => state.auth.isAuthenticated);
    const loc = useLocation()
    if (isAuth) {
        return <>{props.children}</>;
    } else {
        console.log('navigated to hoc')
        return <Navigate to="/login" replace={true} state={{from: loc.pathname}}/>;
    }
};

export default AuthHoc;
