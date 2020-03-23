import React from 'react'
import './Bakbutikk.css';
import Varer from './Varer'

const Bakbutikk = () => {

    return(
        <section>
           <div className="section varer">
            <h2>Varer</h2>
            <Varer />
           </div>
        </section>
        )
    }

    
    
    export default Bakbutikk
    
    //****** INNHOLD DB, la stå hvis du sletter fra admin-side

        // NTAreg.doc("NTAbutton").set({
        //     navn: "Nei til Atomvåpen button",
        //     pris: 20,
        //     detaljer: "Liten hvit button med Nei til Atomvåpen sin logo. Dimensjoner på 3,7cm x 3,7cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("UNGbutton").set({
        //     navn: "Ung mot atomvåpen button",
        //     pris: 20,
        //     detaljer: "Liten hvit button med Ung mot atomvåpen logo. Dimensjoner på 3,7cm x 3,7cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("NTAklistremerke").set({
        //     navn: "Nei til Atomvåpen klistremerke",
        //     pris: 30,
        //     detaljer: "Hvitt, rundt klistremerke med Nei til Atomvåpen sin logo. Dimensjoner på 5,6cm x 5,6cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("UNGklistremerke").set({
        //     navn: "Ung mot atomvåpen klistremerke",
        //     pris: 30,
        //     detaljer: "Hvitt, rundt klistremerke med Ung mot atomvåpen logo. Dimensjoner på 5,6cm x 5,6cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("NTAhandlenett").set({
        //     navn: "Nei til Atomvåpen handlenett",
        //     pris: 100,
        //     detaljer: "Hvitt handlenett med Nei til Atomvåpen sin logo printet på en side. Dimensjoner på 38cm x 42cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("NTAtskjorte").set({
        //     navn: "Nei til Atomvåpen t-skjorte",
        //     pris: 200,
        //     detaljer: "Hvit tskjorte med Nei til Atomvåpen sin logo foran. Tskjorten har unisex utforming. Fåes i størrelse XS, S, M, L, XL.",
        //     bilde: "",
        //     kommentar: "Legg inn kommentar med hvilken størrelse du ønsker."
        // });
    
        // NTAreg.doc("NTAnøkkelring").set({
        //     navn: "Nei til Atomvåpen nøkkelring",
        //     pris: 50,
        //     detaljer: "Nøkkelring i plastikk med Nei til Atomvåpen sin logo på hvit bakgrunn. Dimensjoner på 3,7cm x 3,7cm",
        //     bilde: ""
        // });
    
        // NTAreg.doc("NTAkrus").set({
        //     navn: "Nei til Atomvåpen keramisk krus",
        //     pris: 150,
        //     detaler: "Hvitt krus med Nei til Atomvåpen sin logo. Fåes med forskjellige farger på innsiden av kruset. Farger: svart, rød, blå, gul, grønn.",
        //     bilde: "",
        //     kommentar: "Legg inn kommentar med hvilken farge du ønsker på innsiden av kruset."
        // });
    
        // NTAreg.doc("NTAturkopp").set({
        //     navn: "Nei til Atomvåpen turkopp",
        //     pris: 200,
        //     detaljer: "Rødt metallkrus med hvit Nei til Atomvåpenlogo.",
        //     bilde: ""
        // });