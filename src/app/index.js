import React from "react";
import { render} from "react-dom";
import {Fblogin} from "./components/Fblogin"

class App extends React.Component{

    componentDidMount(){
     }
    render() {
        return(

        <div>
            <h3>Photos export app</h3>
            <Fblogin/>
        </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));