import React from "react";
import {Col,Thumbnail} from "react-bootstrap";

class Photos extends React.Component {
    renderPhoto() {
        return [1,2,3,4,5,6,7].map(function(item) {
            return (
                <Col xs={6} md={6}>
                    <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                </Col>
            );
        });
    }
    render(){
        return(

            <div>
                {this.renderPhoto()}
            </div>

        );

    }
}