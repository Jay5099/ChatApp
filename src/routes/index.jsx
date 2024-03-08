import React,{Suspense,lazy} from 'react'
import {Navigate,useRoutes} from 'react-router-dom'

// layouts
import DashboardLayout from "../layouts/dashboard"

//routes
import GeneralApp from "../pages/dashboard/GeneralApp"

// config

import {DEFAULT_PATH} from "../config"
// const DEFAULT_PATH="/"
import LoadingScreen from "../components/LoadingScreen"
import { Stack } from '@mui/material'

const Loadable = (Component) => (props) =>{
    return(
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props}/>
        </Suspense>
    );
}



export default function Router() {
  return useRoutes([
    {
        path:"/",
        element: (
            <Stack direction="row">
                <DashboardLayout />
            </Stack>
            
            ),
        children:[
            {element: <Navigate to={DEFAULT_PATH} replace />, index:true},
            {path:"app",element:<GeneralApp/> },

            {path:"404",element:<Page404/>},
            {path:"*",element:<Navigate to="/404" replace />}
        ]
    },
    {path:"*",element:<Navigate to="/404" replace />},
  ])
}

const Page404 = Loadable(lazy(()=> import("../pages/Page404")))