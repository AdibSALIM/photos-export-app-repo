import React from "react";
import {Col,Thumbnail} from "react-bootstrap";
import {Link} from "react-router";

export class Albums extends React.Component {
    renderAlbum() {
        return [1,2,3,4,5,6,7].map(function(item) {
            return (
                <Col xs={6} md={6}>
                    <Link to={"/photos"}>
                    <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                    </Link>
                </Col>

            );
        });
    }

    HandleClick(){

    }
    render(){
        return(

                <div onClick={this.HandleClick}>
                    {this.renderAlbum()}
                </div>

        );

    }
}