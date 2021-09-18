import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //holds the items in the gallery
  const [galleryList, setGalleryList] = useState([]);
  const [description, setDescription] = useState();
  let [imageLikes, setImageLikes] = useState(0);
  const [imageMode, setImageMode] = useState(true);

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

  const switchMode = () => {
    setImageMode(!imageMode);
    console.log('testing:', imageMode);
    //return <div> {imageMode ? <img onClick={() => switchMode()} 
    //src="images/goat_small.jpg" /> : <div className = "desc"></div>}
    //</div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
        <img onClick={() => switchMode()} 
        src="images/goat_small.jpg" />
        <br/>
        <div className="desc"><p>Script</p></div>
        {switchMode}
        <button onClick= {()=> likeImage(imageLikes + 1)}>Like Button</button>
        {imageLikes > 0 ? <p>This image has {imageLikes} likes!</p> : 
        <p>This image has no likes</p>
        }
      </div>
      
    </div>
  );
}

export default App;
