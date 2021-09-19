import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {

    let [mode, setMode] = useState(true);

    const descPage = () => {
        return <div className = "desc" onClick= {() => setMode(!mode)}>
            <p>{props.item.description}</p></div>
    }

    const imgPage = () => {
        return <img src = {props.item.path} onClick= 
            {() => setMode(!mode)}/>;
    }
    

    return <div className = "gallItem">
        {mode ? imgPage(): descPage()}<br/>
        <button onClick= {()=> props.likeImage(props.item.id)}>Like Button</button>
        <p>This image has {props.item.likes} likes</p>
    </div>;
}

export default GalleryItem;