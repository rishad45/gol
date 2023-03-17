import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import '../../Styles/About.scss'
const About = () => {
  const [index, setIndex] = useState(0)
  const handleIndex = (index) => setIndex(index)
  const clients = [
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/1c/6d/50/1c6d50321c3ccd49565d6446789797fb.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 4
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/0f/2b/4c/0f2b4c6358ced7a70566c05171eb1e9d.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 1
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/fb/00/c4/fb00c4d68a9e7fda7c12e7efb1817572.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 5
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/fb/00/c4/fb00c4d68a9e7fda7c12e7efb1817572.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 2
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/d3/b3/d9/d3b3d944959c96652a58cf851d5ac66c.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 4
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/36/80/7c/36807ca5e4fed2a75fa01a7ba28c9b67.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 4
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/72/31/79/723179cb2148f0293eb2aaa8e08a3daa.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 3
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/564x/97/65/6a/97656a018b205cff69880f1b64c3b5b2.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 5
    },
    {
      name: 'Roman Rey',
      place: 'Toranto, Canada',
      src: 'https://i.pinimg.com/736x/dd/8d/c8/dd8dc819730c139e627d24ca61b78c92.jpg',
      comment: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque efficitur ac quamin congue.',
      rating: 4
    },
  ]
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className='about'>
        <h4>What Our Clients Says <br /> About Us</h4>
        <div className="card-wrapper">
          <div className="opinions">
            {
              index === 0 && (
                clients.filter((i, index) => index <= 2).map((i) => {
                  return <div className="single-card">
                    <div className="info">
                      <img src={i.src} alt="" />
                      <span className='name'>{i.name}</span>
                      <span className='place'>{i.place}</span>
                    </div>
                    <div className="comment">
                      <p>{i.comment} </p>
                    </div>
                    <div className="rating">
                      {
                        Array.from({ length: i.rating }).map(() => <StarIcon sx={{color: '#3282AD'}}/>)
                      }
                    </div>
                  </div>
                })
              )
            }
            {
              index === 1 && (
                clients.filter((i, index) => index > 2 && index <= 5).map((i) => {
                  return <div className="single-card">
                    <div className="info">
                      <img src={i.src} alt="" />
                      <span className='name'>{i.name}</span>
                      <span className='place'>{i.place}</span>
                    </div>
                    <div className="comment">
                      <p>{i.comment} </p>
                    </div>
                    <div className="rating">
                      {
                        Array.from({ length: i.rating }).map(() => <StarIcon sx={{color: '#3282AD'}} />)
                      }
                    </div>
                  </div>
                })
              )
            }
            {
              index === 2 && (
                clients.filter((i, index) => index > 5 && index <= 8).map((i) => {
                  return <div className="single-card">
                    <div className="info">
                      <img src={i.src} alt="" />
                      <span className='name'>{i.name}</span>
                      <span className='place'>{i.place}</span>
                    </div>
                    <div className="comment">
                      <p>{i.comment} </p>
                    </div>
                    <div className="rating">
                      {
                        Array.from({ length: i.rating }).map(() => <StarIcon sx={{color: '#3282AD'}} />)
                      }
                    </div>
                  </div>
                })
              )
            }

            {/* <div className="single-card">
              <div className="info">
                <img src="https://i.pinimg.com/564x/1c/6d/50/1c6d50321c3ccd49565d6446789797fb.jpg" alt="" />
                <span className='name'>Roman ray</span>
                <span className='place'>Toranto, canada</span>
              </div>
              <div className="comment">
                <p>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Pellentesque efficitur ac quam
                  in congue. </p>
              </div>
              <div className="rating">
                <StarIcon sx={{ color: '#3282AD' }} />
                <StarIcon sx={{ color: '#3282AD' }} />
                <StarIcon sx={{ color: '#3282AD' }} />
                <StarIcon sx={{ color: '#3282AD' }} />
                <StarIcon sx={{ color: '#3282AD' }} />
              </div>
            </div> */}
          </div>
        </div>
        <div className="button-group">
          <button className={`${index === 0 ? 'active' : ''}`} onClick={() => handleIndex(0)}></button>
          <button className={`${index === 1 ? 'active' : ''}`} onClick={() => handleIndex(1)}></button>
          <button className={`${index === 2 ? 'active' : ''}`} onClick={() => handleIndex(2)}></button>
        </div>
      </div>
    </div>
  )
}

export default About