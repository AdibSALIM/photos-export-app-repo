import React from "react";

export class Fblogin extends React.Component {


    componentDidMount(){

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '304966776603491',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.8'
            });

            // login callback implementation goes inside the function() { ... } block
            FB.Event.subscribe('auth.statusChange', function(response) {
                // example implementation
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }.bind(this);


        // Load the SDK asynchronously

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


    }

    render(){

        return (
            <div className="fb-login-button" data-max-row="5"
                 data-size="large"
                 data-show-faces="false"
                 data-auto-logout-link="false"
                 href="javascript:void(0)">
                Login with facebook
            </div>
        );
    }
}