import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function Homepage(){

    const navigate = useNavigate();

    return(
        <>
            <h2 style={{fontSize:"40px"}}>PROCIVILTECH</h2>
            <h3>accesso alla tenda - GDI 2023</h3>
            <form className="interactions">
                <button onClick={()=>navigate("./signin")}>Accedi</button>
                <button onClick={()=>navigate("./signup")}>Registrati</button>
            </form>
        </>
    );
}