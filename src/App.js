import React, { useCallback, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const[get, setGet]=useState([]);
 

  ////GET data from firebase api
   const fetchMovieHandler=useCallback(async()=>{
         
        const res= await fetch('https://post-7d549-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json');
        const data= await res.json();
 
         const loadPost=[];

         for(const key in data){
           loadPost.push({
             ids: key,
             id: data[key].id,
             title: data[key].title,
             body: data[key].body
           })
         }
         setGet(loadPost);

   },[])

  //  useEffect(()=>{
  //   fetchMovieHandler();
  //  },[fetchMovieHandler]);


   
  return (
    <React.Fragment>
     
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>

      <section>
      <Card post={get} />
       </section>

    </React.Fragment>
  );
}

export default App;
