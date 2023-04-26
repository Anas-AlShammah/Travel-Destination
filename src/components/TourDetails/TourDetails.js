import { useParams } from 'react-router-dom'
import './TourDetails.css'
import Header from '../header/Header'
function TourDetails ({tour}){
    
    
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
            <h3>{e.info}</h3>
            <h3>price: {e.price}</h3>
            </div>
            ))}
       
        </>
    )
}
export default TourDetails