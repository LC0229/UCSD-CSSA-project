import React from 'react'
import { Link } from "react-router-dom";
import Personpic from './Personcomp/Personpic';



function Person() {

    
    return(
    <div className='Person'>
        <Link to="/Home">
          <button>返回</button>
        </Link>
        <Personpic/>

    </div>
    )
}

export default Person