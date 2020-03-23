import React, {useState, useEffect} from 'react' 
import {db} from './Firebase'
import Vare from './Vare'

const Varer = () => {

    const [varer, setVarer] = useState([]);

    useEffect( () => {
        const NTAreg = db.collection('NTAregister').onSnapshot(snapshot => {
            const alleVarer = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setVarer(alleVarer);
        })
        return () => {
            console.log('cleanup');
            NTAreg();
        };
    }, []);

return(
    <div className="container">
        {
            varer.map(
                (vare, v, i) =>
                <Vare key={v} number={i} id={vare.id} navn={vare.navn} pris={vare.pris} detaljer={vare.detaljer} kommentar={vare.kommentar} bilde={vare.bilde}/>
            )
        }
        </div>
)
}
export default Varer