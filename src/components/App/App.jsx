import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';

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

  //adds an additional like to the image with the matching ID
  const likeImage = (itemID) => {
    axios.put(`/gallery/like/${itemID}`)
    .then(response => {
      fetchGallery();
    })
    console.log(imageLikes);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
        
      </div>
      <GalleryList list = {galleryList}
      likeImage = {likeImage}
      />
      
    </div>
  );
}

export default App;
