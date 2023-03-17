import React from 'react'
import Card from '../Reusable/Card'
const Cards = ({ arr, index }) => {
    return (
        <div className='d-flex justify-content-between'>
            {
                arr.filter((i) => i.index === index).map((i) => {
                    return <Card
                        isprice={true}
                        place={'Kavarati'}
                        rating={4.5}
                        desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                        src={i.src}
                        buttonText={'Book Now'}
                    />
                })
            }
        </div>
    )
}

export default Cards