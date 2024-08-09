import { useState } from 'react';
// import iconNav from './images/iconNav.svg';
import logoNav from './images/logoNav.svg';
import videoNav from './images/videoNav.svg';
import shapeNav from './images/shapeNav.svg';
import ringtonNav from './images/ringtonNav.svg';
import accountNav from './images/accountNav.svg';
import search from './images/search.svg';
import './navbar.css';

const Nav = () => {
   

    

    return (
    <nav>
        <div className='container'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-between gap-4'>
                
                <img src={logoNav} alt='logo' className='logo' />
                <div className='d-none d-lg-block'>
                <form className='form d-flex justify-content-between'>
                    <label className='label'>
                        <input type="text" id='search' placeholder='Search' className='' />
                    </label> 
                    <img src={search} alt='search' className='img_search'/> 
                </form>
                </div>
            </div>
            <div className='d-flex gap-4'>
                <img src={videoNav} alt='video'/>
                <img src={shapeNav} alt='shape'/>
                <img src={ringtonNav} alt='ringting'/>
                <img src={accountNav} alt='account'/>
            </div>
        </div>
    </div>
    </nav>
    )
}

export default Nav
