import React from 'react'
import { Link } from "react-router-dom";
import Personpic from './Personcomp/Personpic';



function Person({ selectedNumber}) {

    
    return(
    <div className='Person'>
        <p>selectedNumber: {selectedNumber}</p>
        <Link to="/Home">
          <button>返回</button>
        </Link>
        <Personpic/>

    </div>
    )
}

export default Person