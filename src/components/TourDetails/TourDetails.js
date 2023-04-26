import { useParams } from 'react-router-dom'
import './TourDetails.css'
import Header from '../header/Header'
import { useState } from 'react';
function TourDetails ({tour}){
    const [isClick,setIsClick]=useState(false)
    
    let {id}=useParams();
  
   
    let a=tour.filter(e=>e.id==id)
    
    return (
        <>
        <Header />
        {a.map(e=>(
            <div key={e.id} className='card'> 
            <h4>{e.name}</h4>
            <img src={e.image} alt="Logo" />
            {/* <img src={e.image} alt="Logo" /> */}
            <br/>
            <button onClick={()=>setIsClick(!isClick)}>{isClick ? 'show less': "show more"}</button>
            
            {isClick && <h3>{e.info}</h3> }
            <h3>price: {e.price}</h3>
            </div>
            ))}
       
        </>
    )
}
export default TourDetails