import React from "react";

export class Fblogin extends React.Component{

      constructor(props) {
          super(props);

          this.state = {
              status: 'Not connected',
              authenticated: false,
              accessToken: null,
              userID: null
          }
      }

    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);


        if (response.status !== 'connected') {
            // The person is not logged into your app or we are unable to tell.
            this.setState({status: 'Please log into this app.'});

            return;
        }

        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        this.setState({
            status: 'connected',
            authenticated:true,
            accessToken: response.accessToken,
            userID: response.userID
        });
        // Logged into your app and Facebook.
        testAPI();
    }

    checkLoginState() {
        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
        });
    }
      componentDidMount(){

        // This is called with the results from from FB.getLoginStatus().

        // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '304966776603491',
                cookie     : true,  // enable cookies to allow the server to access
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
            });

            /////
            FB.login(function(response) {
                if (response.authResponse) {
                    alert('Permission granted');
                } else {
                    alert('Permission not granted');
                }
            },{scope:'user_photos',perms:'user_photos'});
            /////

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });

            FB.api(
                '/me/permissions/user_photos',
                'DELETE',
                {},
                function(response) {
                    // Insert your code here
                }
            );

        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Successful login for: ' + response.name);
                // document.getElementById('status').innerHTML =
                //     'Thanks for logging in, ' + response.name + '!';
                this.context.router.push('');
            });
        }
    }


    render(){
        return(
            <div>
                <fb:login-button scope="public_profile,email,user_photos" onlogin={this.checkLoginState()} />
                <div id="status">{this.state.status}</div>
            </div>
        );
    }
}