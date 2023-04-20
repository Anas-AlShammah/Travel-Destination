import './Tours.css'
function Tours({ data }) {
    const toursdata = data.data

    return (
        <>
            {

                toursdata.map(e =>
                    <div key={e.id} className='card'>
                        <img src={e.image} alt="Logo" />
                        
                            <div className="container">
                                <h4><b>{e.name}</b></h4>
                                
                            </div>

                    </div>
                )
            }
            
        </>)
}
export default Tours