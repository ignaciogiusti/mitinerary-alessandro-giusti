import '../styles/Welcome.css'
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

export default function Welcome() {
  const title = "MyTinerary";
  return (
    <>
      <div className='Main col space-evenly'>
        <h1 className='Welcome-Title text-light text-center text-border-black'>{title}</h1>
        <p className='Welcome-p text-light text-center'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CallToAction/>
      </div>
    </>
  )
}
