import React from 'react';
import logoo from "./images/logoo.jpg";

const Header =()=>{
    return(
        <>
      <div className='header'>
          <img src={logoo} alt='logo'/>
          <h1>Juhi keep</h1>
      </div>
        </>
    );
};

export default Header;