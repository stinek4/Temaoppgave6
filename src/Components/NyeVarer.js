import React, {useState, useRef} from 'react'
import {db} from './Firebase'
import './NyeVarer.css'

const NyeVarer = () => {

    const inp1 = useRef()
    const inpNavn = useRef()
    const inpPris = useRef()
    const inpDetaljer = useRef()
    const inpKommentar = useRef()
    const inpBilde = useRef()
    const [nyeVarer, setNyeVarer] = useState([]);

    const NyInput = () => {
        
        db.collection('NTAregister')
        .add({
            id: inp1,
            navn: inpNavn,
            pris: Number(inpPris),
            detaljer: inpDetaljer,
            kommentar: inpKommentar,
            bilde: inpBilde
        })        
    };

    const AddVare = () => {      
        setNyeVarer(nyeVarer)
        inp1.current.value = '';
        inpNavn.current.value = '';
        inpPris.current.value = '';
        inpDetaljer.current.value = '';
        inpKommentar.current.value = '';
        inpBilde.current.value = '';
    }

    return(
        <section className="nyVare">
           <h2>Registrer nye varer</h2> 
            <form onSubmit={AddVare}>
                <input ref={inp1} placeholder="ID" type="text" id="inp1"></input>
                <input ref={inpNavn} placeholder="Navn" type="text" className="inpNavn"></input>
                <input ref={inpPris} placeholder="Pris" type="number" className="inpPris"></input>
                <input ref={inpDetaljer} placeholder="Detaljer" type="text" className="inpDetaljer"></input>
                <input ref={inpKommentar} placeholder="Kommentar" type="text" className="inpKommentar"></input>
                <input ref={inpBilde} placeholder="Bilde" type="text" className="inpBilde"></input>
                <button type="submit" onClick={NyInput}>Registrer ny vare</button>
            </form>
        </section>
    )

    
}
export default NyeVarer