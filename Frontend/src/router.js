import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ROUTES } from './routeDetails'

const Router = () => {
  return (
    <BrowserRouter>
        {   
            ROUTES.map((route,index) => {
                return <Route
                  key = {index}
                  exact={route.exact}
                  path={route.path}
                  render={ ({history}) => route.main(history) } 
                />
            })
        }
    </BrowserRouter>
  );
};

export default Router;