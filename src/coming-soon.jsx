import React from 'react';
import Countdown from 'react-countdown';
import './coming-soon.css'

export default function ComingSoon(){

    return(
        <>
        <div className="comingSoon">
            <div className='titolo-coming-soon'>Ops!<br/>Sei in anticipo!</div>
            <div className="countdown">
                <div className='sottotitolo-coming-soon'>Registrazione disponibile tra:</div>
                <Countdown date={Date.UTC(2023, 4, 30, 9, 0, 0)} />
            </div>
            <div className="info">
                <div className='corpo-coming-soon'>Ci troverai nell'area esterna di Como Next durante la Giornata Dell'innovazione 2023 per provare tutte le tecnologie di ProCivilTech</div> 
            </div>
        </div>
        </>
    );
}
