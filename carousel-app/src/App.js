import './App.css';
// import Buttons from './components/Buttons';
import Carousel from './components/Carousel';
import sale from './images/sale.png';

function App() {
  return (
    <div className="container">
      <img src={sale} alt='sale' className='sale'/>
      <div className='carousel-app'>
      <Carousel />
     </div>
     </div>
  );
}

export default App;
