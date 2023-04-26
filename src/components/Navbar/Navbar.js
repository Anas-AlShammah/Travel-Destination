import { NavLink } from "react-router-dom"
function Navbar (){
    return (
        <>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
        </ul>
        </>
    )
}
export default Navbar