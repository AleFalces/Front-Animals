import React from "react";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import Dashboard from "../Dashboard/Dashboard"
import { Box, Divider} from "@chakra-ui/react";

const DashboardAdmin = () => {

    return(
        <Box bg="brand.green.200" vW="100%" vH='100%'>
            <TopNav/>
            <Divider  />
            <SideNav/>
            <Dashboard/>
        </Box>
    )
}

export default DashboardAdmin