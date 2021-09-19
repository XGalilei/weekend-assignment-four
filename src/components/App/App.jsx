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

  const likeImage = (itemID) => {
    axios.put(`/gallery/like/${itemID}`)
    .then(response => {
      fetchGallery();
    })
    console.log(imageLikes);
  }

  const switchMode = (itemID) => {
    setImageMode(!imageMode);
    console.log('testing:', imageMode);
    //return <div> {imageMode ? <img onClick={() => switchMode()} 
    //src="images/goat_small.jpg" /> : <div className = "desc"></div>}
    //</div>;
  };

  const testProps = {
    id: 1,
    path: "images/goat_small.jpg",
    description: 'A picture of a goat',
    likes: 0
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
//<GalleryItem item = {testProps}
        //imageMode = {imageMode}
//        switchMode = {switchMode}
//        likeImage = {likeImage}
//        />