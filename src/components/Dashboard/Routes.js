import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardMain from "./DashboardMain";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
const DRoutes = () => {

  
    return useRoutes([
        {
            path: '/',
            element: <DashboardMain />,
            children: [
                {
                    path: '/',
                    element: <DashboardHome />
                },
               
            ]
        },
        // {
        //     path: '/login',
        //     element: <Login />
            
        // },
        
       
    ])
}

export default DRoutes;