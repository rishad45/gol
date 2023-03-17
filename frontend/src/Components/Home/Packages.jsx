import '../../Styles/Packages.scss'
import Card from '../Reusable/Card'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Cards from '../Reusable/Cards'
const Packages = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const menu = ['Maldives', 'Samudram', 'Cordelia', 'Agatti']
    const banners = [
        {
            index: 0,
            src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
        },
        {
            index: 0,
            src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
        },
        {
            index: 0,
            src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
        },
        {
            index: 0,
            src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
        },
        {
            index: 1,
            src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
        },
        {
            index: 1,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 1,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 1,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 2,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 2,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 2,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
        {
            index: 2,
            src: 'https://i.pinimg.com/564x/91/ab/35/91ab351e0ca4bc826cde2683b1de7759.jpg'
        },
    ]
    return (
        <>
            <div className="container-fluid packages d-flex flex-column align-items-center">
                <div className="package-manage d-flex flex-column justify-center align-items-center">
                    <h3>Best Packages For You</h3>
                    <p>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
                    <div className="spots-menu d-flex">
                        {
                            menu.map((item) => {
                                return <button className='menuButton'>{item}</button>
                            })
                        }
                        <button className='menuButton active'>More</button>
                    </div>
                </div>

                <div className="pictorial-description">
                    <Carousel className='carousel-items' activeIndex={index} onSelect={handleSelect} indicators={false}>
                        <Carousel.Item>
                            <Cards arr={banners} index={0} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Cards arr={banners} index={1} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Cards arr={banners} index={2} />
                        </Carousel.Item>
                    </Carousel>
                    <div className="slide-button-group">
                        <button className={`slideButton ${index === 0 ? 'active' : ''}`} onClick={() => handleSelect(0)}></button>
                        <button className={`slideButton ${index === 1 ? 'active' : ''}`} onClick={() => handleSelect(1)}></button>
                        <button className={`slideButton ${index === 2 ? 'active' : ''}`} onClick={() => handleSelect(2)}></button>
                    </div>
                    <div className="discover-more">
                        <button>Discover More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages