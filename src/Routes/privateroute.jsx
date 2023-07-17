import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()

     if (loader){
        return     <> <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" /></>
     }

    if (user){
        return children
    }
    return <Navigate state={{from:location}} to="/login"   replace> </Navigate>
};

export default PrivateRoute;