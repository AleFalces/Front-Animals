import React from "react";
import TopNav from "../TopNav/TopNav";
import Dashboard from "../Dashboard/Dashboard"
import { Box, Divider} from "@chakra-ui/react";

const DashboardAdmin = () => {

    return(
        <Box bg="brand.green.200" vW="100%" vH='100%'>
            <TopNav/>
            <Divider  />
            <Dashboard/>
        </Box>
    )
}

export default DashboardAdmin