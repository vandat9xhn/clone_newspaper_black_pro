import React from "react"
// 
import { HOME_PATH } from "./paths"

// 
const Home = React.lazy(() => import('../pages/home/_main/Home'))


// 
export const Routes = [
    {
        component: Home,
        path: HOME_PATH,
        exact: true,
    }
]