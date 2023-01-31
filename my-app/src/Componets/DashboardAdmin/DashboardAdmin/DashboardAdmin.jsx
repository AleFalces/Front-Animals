import React from "react";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import Dashboard from "../Dashboard/Dashboard"


const DashboardAdmin = () => {

    return(
        <div>
            <TopNav/>
            <SideNav/>
            <Dashboard/>
        </div>
    )
}

export default DashboardAdmin