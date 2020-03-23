import React, {useState} from 'react'
import {db} from './Firebase'

const Vare = (props) => {

    let [verdi, setVerdi] = useState(0)
    
    //********** SLETT VARE FRA DATABASEN - PERMANENT **********    
    const deleteVare = () => {
        db.collection('NTAregister')
        .doc(props.id)
        .delete();
    }
    
    //********** ENDRER VARE I DATABASEN **********  
    const Endrepris = () => {
        db.collection('NTAregister')
        .doc(props.id)
        .update({
            pris: Number(verdi)
        })      
    }

    const endreVerdi = (evt) => {      
        setVerdi(Number(evt.target.value));
    }


return(
            <li key={props.v}>
                <div className="vare-card">
                    <div className="vare-detaljer">
                        <div className="vare-bilde"><img className="vare-img" src={props.bilde} alt="vare thumb"/></div>
                        <div className="vare-navn">{props.navn}</div>
                            <div className="vare-detaljer" id="detaljer">Detaljer: {props.detaljer}</div>
                            <div className="vare-pris">Pris: {props.pris},-</div>
                        <div className="vare-kommentar">{props.kommentar}</div>
                    </div>
                        <div className="vareButtons">
                            <input type="number" onInput={endreVerdi}></input>
                            <div
                                onClick={Endrepris}
                                className="vare-endrePris"
                                style={{cursor: 'pointer'}}
                            >
                                <i className='material-icons'>Endre pris</i>
                            </div>
                            <div 
                            onClick={deleteVare}
                            className="vare-delete"
                            style={{cursor: 'pointer'}}
                            >
                                <i className='material-icons'>Slett vare</i>
                        </div>
                    </div>
                </div>
            </li>

)
}

export default Vare