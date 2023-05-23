import React from 'react';
import Countdown from 'react-countdown';
import './coming-soon.css'

export default function ComingSoon(){

    return(
        <>
        <div className="comingSoon">
            <h1>Ops!<br/>Sei in anticipo!</h1>
            <div className="countdown">
                <h2>Registrazione disponibile tra:</h2>
                <Countdown date={Date.UTC(2023, 4, 30, 9, 0, 0)} />
            </div>
            <div className="info">
                <h3>Ci troverai nell'area esterna di Como Next durante la Giornata Dell'innovazione 2023 per provare tutte le tecnologie di ProCivilTech</h3> 
            </div>
        </div>
        </>
    );
}
