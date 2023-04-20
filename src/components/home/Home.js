import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tours from "../tours/Tours"
import './Home.css'
function Home(props){

    return(
        <>
        <Header />
       
        
        <div className="tours">
        <Tours data={props}/>
        </div>
        <Footer />
        </>
    )
}
export default Home