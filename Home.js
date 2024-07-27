import React,{useState}from 'react';
import "../styles/Home.css";
import Header from './Homecomp/Header.js';
import "../styles/ButtonGrid.css";
import System from './Homecomp/System.js';
import Footer from './Homecomp/Footer.js';


function Home({transmit}) {
  const [selectedNumber, setselectedtNumber] = useState(null);

  return (
    <div className='Home'>
      <Header/>
      <System setSelectedNumber={setselectedtNumber}/>
      {selectedNumber !== null && (
        <div className="selected-number">
          Selected Number: {selectedNumber}
        </div>
      )}

      <Footer/>
    </div>
  )
}

export default Home