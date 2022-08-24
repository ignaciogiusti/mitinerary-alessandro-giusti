import '../styles/Welcome.css'
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';


export default function Welcome() {
  const titleMy = "My";
  const titleTinerary = "Tinerary";
  return (
    <>
      <div className='Main col space-evenly text-effect'>
        <h1 className='Welcome-Title text-center'>{titleMy}<span className='Title-Tinerary'>{titleTinerary}</span></h1>
        <p className='Welcome-p text-light text-center'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CallToAction linkTo='cities' />
      </div>
      <Carousel slides={3} interval={3} range={4} />
    </>
  )
}
