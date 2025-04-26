import React, { useEffect, useState } from 'react'
import'./Player.css'
import back_arrow from'../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const{id} = useParams();
 const navigate = useNavigate();
const[apiData, setApiData] =useState({
  name: "",
  key: "",
  published_at:"",
  type: ""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjJmMjYzOTc4NDAzZDU0YmYwMDg2NTc4YTI4MDFjOCIsIm5iZiI6MTc0NDMwNDA2OS4xMDksInN1YiI6IjY3ZjdmN2M1ZDgxNzQ4Y2NmZjk5NjU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGAn39kGZsHET7gX6_qM3bsGxG5D70cbqi6TiihMjqo'
    }
  };
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

 

  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{
        navigate(-2)
      }}/>
     <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
     title='trailer' frameBorder='0' allowFullScreen></iframe>
     <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
     </div>
    </div>
  )
}

export default Player