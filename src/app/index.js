import React from "react";
import { render} from "react-dom";
import {Fblogin} from "./components/Fblogin"
import {Header} from "./components/Header";

class App extends React.Component{

    componentDidMount(){
     }
    render() {
        return(

        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Fblogin/>
                </div>
            </div>

        </div>


        );
    }
}

render(<App/>, window.document.getElementById("app"));