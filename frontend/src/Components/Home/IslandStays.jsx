import '../../Styles/Island.scss'
import Card from '../Reusable/Card'
import {ReactComponent as World} from '../../Assets/world.svg'
const IslandStays = () => {
  const banners = [
    {
      index: 0,
      src: 'https://i.pinimg.com/564x/97/ca/c6/97cac63c4a3b188a77d1c640ee8b3503.jpg'
    },
    {
      index: 0,
      src: 'https://i.pinimg.com/564x/2b/1c/37/2b1c376dd03081729e2e2c3262d3cf4e.jpg'
    },
    {
      index: 0,
      src: 'https://i.pinimg.com/564x/56/37/d6/5637d65fc2e8d8078a46041c575aa860.jpg'
    },
    {
      index: 0,
      src: 'https://i.pinimg.com/564x/30/0a/c3/300ac393bb017ae4324091ded5fa6693.jpg'
    },
    {
      index: 1,
      src: 'https://i.pinimg.com/564x/dc/87/5f/dc875f04052d0035a499adc86de5943f.jpg'
    },
    {
      index: 1,
      src: 'https://i.pinimg.com/564x/9d/3d/82/9d3d82ddbd000c314784a3063a9a5a32.jpg'
    },
    {
      index: 2,
      src: 'https://i.pinimg.com/564x/12/5a/81/125a810aa4f3642d802923026456e200.jpg'
    },
    {
      index: 2,
      src: 'https://i.pinimg.com/564x/cf/ec/20/cfec203c6348be61d112a1f2b5e028d1.jpg'
    },
  ]
  return (
    <div className='island'>
      <div className="islandStays d-flex flex-column">
        <h1>Island Stays</h1>
        <div className="text-wrap">
          <p>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
        </div>
        <div className="island-pics d-flex flex-wrap justify-content-between">
          {
            banners.map((i, index) => {
              return <Card
                key={index}
                place={'Kavarati'}
                rating={4.5}
                desc={'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...'}
                src={i.src}
                buttonText={'Explore More'}
              />
            })
          }
        </div>
        <div className="explore-with-us d-flex">
          <div className="left-side">
            <h4>Let's Ready to Explore the<br/> World With Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue. </p>
          </div>
          <div className="right-side">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IslandStays