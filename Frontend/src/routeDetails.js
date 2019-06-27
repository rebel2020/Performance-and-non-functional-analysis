import Lighthouse from './features/lighthouse';
import Gatling from './features/gatling';
import React from 'react';
import { Redirect } from 'react-router-dom';
export const ROUTES = [
    {
        exact:true,
        path:"/",
        main: (history,toggle,setToggle) =><Redirect to={{ pathname: '/lighthouse' }} />
    },
    {
        exact:true,
        path:"/gatling",
        main: (history,toggle,setToggle) => <Gatling history={history} comp="gatling_stats"  />
    },
    {
        exact:true,
        path:"/lighthouse",
        main: (history,toggle,setToggle) => <Lighthouse history={history} comp="home"  />
    },
    {
        exact:true,
        path:"/lighthouse/performance",
        main: (history,toggle,setToggle) => <Lighthouse history={history} comp="performance"  />
    },
    {
        exact:true,
        path:"/lighthouse/accessibility",
        main: (history,toggle,setToggle) => <Lighthouse history={history} comp="accessibility"  />
    }
]