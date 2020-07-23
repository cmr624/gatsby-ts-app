import React from "react";
import {Router} from "@reach/router"
import HelloWorld from "../modules/helloWorld";
const AppRouter = () => {
    return (
        <Router>
            <HelloWorld path="/app/hello"/>
        </Router>
    )
}

export default AppRouter;