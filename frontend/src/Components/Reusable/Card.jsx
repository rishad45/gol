import '../../Styles/Card.scss'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { fontSize } from '@mui/system';
const Card = ({ isprice = false, src, place, rating, desc }) => {
    return (
        <div className='card-component'>
            <div className="card-image">
                <img src={src} alt="" />
                {
                    isprice ? <span><CurrencyRupeeIcon fontSize='14px' />500</span> : ''
                }
            </div>
            <div className="card-desc">
                <div className="desc-head">
                    <span className='location'><LocationOnIcon /> {place}</span>
                    <span className='rating'><StarIcon sx={{ color: '#3282AD', fontSize: '16px' }} />{rating}</span>
                </div>
                <p className='desc'>{desc}</p>
                <div className="book-button">
                    <button className='book-now'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card