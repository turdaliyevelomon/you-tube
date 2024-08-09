import React from 'react';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
import icon6 from './images/icon6.svg';
import icon7 from './images/icon7.svg';
import icon8 from './images/icon8.svg';
import icon9 from './images/icon9.svg';
import icon10 from './images/icon10.svg';
import icon11 from './images/icon11.svg';
import icon12 from './images/icon12.svg';
import account from '../navbar/images/accountNav.svg'
import { useState, useEffect } from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

const Main = () => {

  const [user, setUser] = useState([]);

  const myFuncsion = () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5d4f337608msh893103199ee5b54p1170c2jsn92621dcef705',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
  
  fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50', options)
    .then(response => response.json())
    .then(data => {
      setUser(data.items)
      console.log(data.items)
    })
    .catch(err => console.error(err));
    }
    // myFuncsion();
    useEffect(() => {
      myFuncsion()
    }, [])

  let kind = user.map((element) => (
    <div>
      <iframe className='iframe1' src={`https://www.youtube.com/embed/${element.id.videoId}`} frameborder="0"></iframe>
      <h6>{element.snippet.channelTitle}</h6>
      <span className="fs-6">{element.snippet.publishTime}</span>
    </div>
    ));

    let recommented = user.map((element) => (
      <div>
        <iframe className='iframe2' src={`https://www.youtube.com/embed/${element.id.videoId}`} frameborder="0"></iframe>
        <h6>{element.snippet.channelTitle}</h6>
        <span className="fs-6">{element.snippet.publishTime}</span>
      </div>
      ))


    const [showMore, setShowMore] = useState('');
    const classFuncsion = () => {
        showMore === '' ? setShowMore('showMore') : setShowMore('');
    }
    

  return (
    <div className='container'>
        <div className="row mt-4">
            <div className="col-3 d-none d-md-block">
              <div className='d-flex gap-4 mb-3'>
                <img src={icon1} alt="" />
                <span>Home</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon2} alt="" />
                <span>Trending</span>
              </div>
              <div className='d-flex gap-4 mb-5'>
                <img src={icon3} alt="" />
                <span>Subscriptions</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon4} alt="" />
                <span>Library</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon5} alt="" />
                <span>History</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon6} alt="" />
                <span>Watch later</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon7} alt="" />
                <span>Favourites</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon8} alt="" />
                <span>Liked videos</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon9} alt="" />
                <span>Music</span>
              </div>
              <div className='d-flex gap-4 mb-3'>
                <img src={icon10} alt="" />
                <span>Games</span>
              </div>
              <div className={`d-flex gap-4 ${showMore}`} onClick={classFuncsion}>
                <img src={icon11} alt=""/>
                <span>Show more</span>
              </div>
              <div>
                <h5 className='mt-5 mb-4'>Subscriptions</h5>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Gussie Singleton</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Nora Francis</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Belle Briggs</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Eunice Cortez</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Emma Hanson</p>
                </div>
                <div className='d-flex gap-2 mb-3 align-items-center'>
                  <img src={account} alt="" />
                  <p>Leah Berry</p>
                </div>
              </div>
              <div className='d-flex gap-4  mt-5'>
                <img src={icon12} alt="" />
                <span>Setting</span>
              </div>

            </div>
            <div className="col-9 mx-auto">
              <div className='d-none d-md-block'>
              <div className='d-flex gap-2 mb-3'>
                <img src={account} alt="" />
                <h5>Dollie Blair</h5>
              </div>
              </div>
              <div className=''>
              <div className='d-md-flex gap-2 overflow-x-auto'>
                {kind}
              </div>
              </div>
              <h4 className="mt-5 mb-4 d-none d-md-block">Recommended</h4>
              <div className='d-none d-md-block'>
              <div className='d-flex gap-2 overflow-x-auto'>
                {recommented}
              </div>
              </div>
             <div className='d-none d-md-block'>
             <div className='d-flex gap-2 mb-3 mt-5'>
                <img src={account} alt="" />
                <h5>Dollie Blair</h5>
              </div>
             </div>
              <div className='d-none d-md-block'>
                <div className='d-flex gap-2 overflow-x-auto'>
                  {kind}
                </div>
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default Main;