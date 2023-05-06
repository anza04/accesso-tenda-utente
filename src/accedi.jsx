import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Accedi()
{
    const [error, setError] = React.useState(0);

    const navigate = useNavigate();

    const Accesso=async()=>
    {
        const user = document.getElementById("username").value;
        const pw = document.getElementById("password").value;

        await axios.get("https://protezione-civile-server.onrender.com/accessoTenda")
        .then(
            (res)=>{res.data[user]==pw?navigate("../show?user="+user):setError(1)}
        );
    };

    return(
        <>
            <h2>ACCEDI</h2>
            <div className="interactions">
                <input type="text" name="username" id="username" placeholder='username' />
                <input type="password" name="password" id="password" placeholder='password' />
                <button value="accedi" id='accedi' onClick={()=>Accesso()}>accedi</button>
            </div>
            <img src="/assets/logo.png" alt="" />
            {error?<div className="error" onClick={()=>{setError(0)}}>Username o Password errati</div>:null}
        </>
    );
}