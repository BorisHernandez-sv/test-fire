import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { Review } from '../components/screen-1/Review';
import { Checkout } from '../components/checkout/Checkout';
import { Sidebar } from '../components/sidebar/Sidebar'

// import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
         <Sidebar/>

            <div>
                <Switch>
                    {/* <Route
                        path="/auth"
                        component={ AuthRouter }
                    /> */}
                      <Route
                        exact
                        path="/"
                        component={ HomeScreen }
                    />
                      <Route
                        exact
                        path="/review"
                        component={ Review }
                    />
                    <Route
                        exact
                        path="/checkout"
                        component={ Checkout }
                    />

                    <Redirect to="/"/>

                </Switch>
            </div>
        </Router>
    )
}
