import '../../Styles/Packages.scss'
import Card from '../Reusable/Card'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
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
                    {/* {
                        banners.filter((item) => item.index === index).map((i) => {
                            return <Card
                                isprice={true}
                                place={'Kavarati'}
                                rating={4.5}
                                desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                                src={i.src}
                            />
                        })
                    } */}
                    <Carousel className='carousel-items' activeIndex={index} onSelect={handleSelect} >
                            <Carousel.Item>
                            <Card
                                            isprice={true}
                                            place={'Kavarati'}
                                            rating={4.5}
                                            desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                                            src='https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
                                        />
                            </Carousel.Item>
                            <Carousel.Item>
                                {
                                    banners.filter((item) => item.index === index).map((i) => {
                                        return <Card
                                            isprice={true}
                                            place={'Kavarati'}
                                            rating={4.5}
                                            desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                                            src={i.src}
                                        />
                                    })
                                }
                            </Carousel.Item>
                            <Carousel.Item>
                                {
                                    banners.filter((item) => item.index === index).map((i) => {
                                        return <Card
                                            isprice={true}
                                            place={'Kavarati'}
                                            rating={4.5}
                                            desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                                            src={i.src}
                                        />
                                    })
                                }
                            </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Packages