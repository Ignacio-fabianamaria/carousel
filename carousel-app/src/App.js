import './App.css';
// import Buttons from './components/Buttons';
import left from './images/left.png';
import rigth from './images/right.png';
import Carousel from './components/Carousel';
import sale from './images/sale.png';

function App() {
  return (
    <div className="container">
      <img src={sale} alt='sale' className='sale'/>
      <div className='carousel'>
      <Carousel />
      </div>
      <div className='buttons'>
      <button type='button' className='left'>
        <img src={left} alt='left' className='left' />
      </button>
      <button type='button' className='rigth'>
        <img src={rigth} alt='rigth' className='rigth' />
      </button>
      </div>
    </div>
  );
}

export default App;
