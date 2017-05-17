import React from "react";
import {Fblogin} from "./Fblogin";
import {Albums} from "./Albums";
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">

                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand">Photo Export App</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse in">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/albums">Albums</NavLink></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li><a>User <span className="sr-only">(current)</span></a></li>
                                    <li><NavLink to="/"><span className="glyphicon glyphicon-log-out" title="Log out"/></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Route exact path="/" component={Fblogin}/>
                    <Route path="/albums" component={Albums}/>

                </div>
            </Router>

            );
    }

}