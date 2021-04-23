import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={() => {
            if (window.localStorage.getItem("token")){
                console.log("im here");
                return <Component/>;
            }else{
                console.log("no token");
                return <Redirect to="/login"/>
            }
        }}
        />
    )
}








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in