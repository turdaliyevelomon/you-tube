import React from 'react';
import Nav from '../home/navbar/Nav';
import { useState, useEffect } from 'react';
import './newPage.css'

const NewPage = () => {

  const [fetchData, setFetchData] = useState([]);
  
  
  const myFunk = () => {

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
      setFetchData(data.items)
      console.log(data.items)
    })
    .catch(err => console.error(err));
    }
    
    useEffect(() => {
      myFunk()
    }, [])

    let newVideo = fetchData.map((element) => (
      <div className='fetchData'>
        <ifram src={`https://www.youtube.com/embed/${element.id.videoId}`} frameborder="0" className="w-100" ></ifram>
        <h6>{element.snippet.channelTitle}</h6>
        <span className="fs-5">{element.snippet.publishTime}</span>
      </div>
      ));
  
  return (
    <div className='container'>
      <Nav/>
      {newVideo}
    </div>
  )
    
  }


export default NewPage;