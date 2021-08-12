import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="data:image/jpeg;base64,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" alt=""/> 
                <div className="login_text">
                    <h1>WhatsApp</h1>
                </div>
                
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login;