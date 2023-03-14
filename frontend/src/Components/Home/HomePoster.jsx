import '../../Styles/HomePoster.scss'
import ExploreIcon from '@mui/icons-material/Explore';
import {ReactComponent as World} from '../../Assets/world.svg'
const HomePoster = () => {
    return (
        <div className="homePosterContainer container-fluid">
            <div className="row homePoster">
                <div className="col-4 d-flex flex-column homeposter-leftSide justify-content-around align-items-center">
                    <button className='visit-button'><span style={{marginRight: '10px'}}>Visit</span><ExploreIcon sx={{color:'blue'}}/></button>
                    <h1>
                        <span class="line1">The Exotic</span><br/>
                        <span class="line2">Lakshadweep</span><br/>
                        <span class="line3">Islands</span>
                    </h1>
                        <button className='discover-button'>Discover Now</button>
                        </div>
                        <div className="col-8 d-flex homeposter-rightSide justify-content-center align-items-center">
                            <div className='svgWorld'><World width='50rem' height='30rem' stroke/></div>
                            <img className='poster-image' src="https://res.cloudinary.com/dezl7f4po/image/upload/v1678764362/image/engin-akyurt-A5P0x7Zfqqw-unsplash-removebg_oz0a5z.png" alt="" />
                        </div>
                </div>
            </div>
            )
}

            export default HomePoster