import './Header.css'
import { NavLink } from "react-router-dom"
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'green'
  };
 

 



 
function Header(){

    return(
        <div>
        
 
    <span className="Title">best Travel Destination</span>
    <ul >
            <li><NavLink style={linkStyle} to='/'>Home</NavLink></li>
     </ul>
    </div>
    )
}
export default Header