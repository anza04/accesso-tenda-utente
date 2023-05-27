import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Signup()
{

    const navigate = useNavigate();

    const Registrazione= async()=>
    {
        const user = document.getElementById("username").value;
        const pw = document.getElementById("password").value;

        if(user != "" && pw != "" )
            await axios.post("https://protezione-civile-server.onrender.com/aggiungiTenda", {username: user, pw: pw}).then(navigate("../show?user="+user));
        
        
    };

    return(
        <>
        
            <h2>REGISTRATI PER ACCEDERE ALLA TENDA</h2>
            <div className="interactions">
                <input type="text" name="username" id="username" placeholder='username' />
                <input type="password" name="password" id="password" placeholder='password' />
                <button value="registrati" id='registrati' onClick={()=>Registrazione()}>registrati</button>
            </div>
            <img src="/assets/logo.png" alt="" />
        </>
    );
}