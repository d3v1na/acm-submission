import './App.css';
import Navbar from './Components/Navbar';
import Front from './Components/Front';
import Logoblock from './Components/Logoblock';
import Infoblock from './Components/Infoblock';
import Describe from './Components/Describe';
import Customize from './Components/Customize';
import right from './Assets/rightarrow.png'

function App() {
  return (
    <div className="App">

      <div className='announcement'>
        <span className='leftDots'>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>
        <p>Use this announcement bar to inform visitors of something important.</p> 
        <span className='rightDots'>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>
      </div>

      <Navbar />
      <hr />
      <Front />
      <Logoblock />
      <Infoblock />
      <div className="rect"></div>
      <Describe />
      <Customize />
      <div className="blackbox">
        <p className='bb1'>Save time and build <br /> better products faster.</p>
        <div>
          <p className='bb2'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut metus nunc.</p>
          <div className="get-started">
                <p>Get Started</p>
                <img src={right}/>
          </div>
        </div>
        
      </div>
      

    </div>
  );
}

export default App;
