import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";











//use <route> components to define clinet-side router in our application 
//router component is in charge of sayinmg when the URL matches this psecified path render this compnent 
//router component has one prop on our example: Path 

//use <browserRouter> to wrap entire application and provide react router context features 
ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>, 
document.getElementById("root"));
