import React from 'react';
import Nav from './navbar/Nav';
import Main from './main/Main';
import iconNav from './navbar/images/iconNav.svg';
import { useState } from 'react';

const Home = () => {

  const [myClass, setMyClass] = useState('');

  const handleClick = () => {
    myClass === '' ? setMyClass('myClass') : setMyClass('');
  }
  return (
    <div className={`App ${myClass}`}>
     <div className='container'>
      <div className='pRelative'>
      <img src={iconNav} alt='nav_icon' onClick={handleClick} className='navIcon' />
      </div>
     </div>
        <Nav />
        <Main/>   
    </div>
  )
}

export default Home;
