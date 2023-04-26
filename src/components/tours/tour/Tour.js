import { Link } from 'react-router-dom'
import './Tour.css'
import Button from 'react-bootstrap/Button';
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'green'
  };
function Tour({tour}) {
let al='/city/'+tour.id;

    return (
        <>
        <div >
        <img src={tour.image} alt="Logo" />
                        
                        <div className="container">
                            <h4><b>{tour.name}</b></h4>
                            
                            <Link style={linkStyle} to={al}>more</Link>
                        </div>
        </div>
            {/* {

                toursdata.map(e =>
                    <div key={e.id} className='card'>
                        <img src={e.image} alt="Logo" />
                        
                            <div className="container">
                                <h4><b>{e.name}</b></h4>
                                
                            </div>

                    </div>
                )
            } */}
            
        </>)
}
export default Tour