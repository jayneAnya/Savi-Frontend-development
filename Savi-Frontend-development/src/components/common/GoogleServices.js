import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; 
import jwt_decode from "jwt-decode";

export const GoogleServices = () => {
    return (
        <GoogleOAuthProvider clientId="1093615090062-g1gr8ljcmk94dluet701lvld0l4hom78.apps.googleusercontent.com">
            <GoogleLogin
            onSuccess={credentialResponse => {
                var decoded = jwt_decode(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              /> 
            </GoogleOAuthProvider>
    )
}