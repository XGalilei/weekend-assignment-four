import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //holds the items in the gallery
  const [galleryList, setGalleryList] = useState([]);
  const [description, setDescription] = useState();
  let [imageLikes, setImageLikes] = useState(1);

  useEffect(() => {
    fetchGallery();
  }, []); // it seems that the [] is necessary to avoid an infinite loop

  // retrieve images from the gallery using axios
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch(error => {
      console.log("error in /GET:", error);
    });
  };

  const likeImage = ()=> {
    setImageLikes(imageLikes + 1);
    console.log(imageLikes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
        <img onClick={() => console.log("testing")} 
        src="images/goat_small.jpg" />
        <br/>
        <button onClick= {()=> likeImage()}>Like Button</button>
        <p>Nobody likes me, everybody hates me, I guess I'll go eat worms!</p>
      </div>
      
    </div>
  );
}

export default App;
