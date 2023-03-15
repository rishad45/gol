import '../../Styles/TripPlanner.scss'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
const TripSelector = () => {
    return (
        <div className='container-fluid trip-container'>
            <div className="trip-planner">
                <h6>Where are you Flying?</h6>
                <div className='selectors'>
                    <div className="inputContainer">
                        <label htmlFor="from">from - to</label>
                        <select name="" id="from" className='selectBox'>
                            <option value="lahore">Lahore</option>
                            <option value="karachi">karachi</option>
                            <option value="lakshadweep">lakshadweep</option>
                        </select>
                    </div>
                    <div className="trip inputContainer">
                        <label htmlFor="tripId">Trip</label>
                        <select name="" id="tripId" className='selectBox'>
                            <option value="lahore">Lahore</option>
                            <option value="karachi">karachi</option>
                            <option value="lakshadweep">lakshadweep</option>
                        </select>
                    </div>
                    <div className="return inputContainer">
                        <label htmlFor="depart">Depart-Return</label>
                        <input type="date" name="" id="depart" className='selectBox' />
                    </div>
                    <div className="flight-class inputContainer">
                        <label htmlFor="classs">Passenger-class</label>
                        <select name="" id="classs" className='selectBox'>
                            <option value="1passenger">1passenger</option>
                            <option value="firstClass">firstClass</option>
                            <option value="secondClass">secondClass</option>
                        </select>
                    </div>
                </div>
                <div className="promo">
                    <button className='add-promo promoButton'><AddIcon fontSize='5px'/><span style={{marginLeft:'6px'}}>Add promo code</span></button>
                    <button className="show-flight promoButton"><SendIcon fontSize='5px'/><span>Show Flights</span></button>
                </div>
            </div>
        </div>
    )
}

export default TripSelector