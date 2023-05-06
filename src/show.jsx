import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import QRCode from 'react-qr-code'

export default function Show(){

    const useQuery = () => new URLSearchParams(useLocation().search);

    const query = useQuery();

    const user = query.get('user');

    console.log(user)

    return(
        <>
            <h2 style={{fontSize:"40px"}}>PROCIVILTECH</h2>
            <h3>QR code di accesso - GDI 2023</h3>

            <div className="qr">
                <QRCode value={user} />
            </div>

        </>
    );
}