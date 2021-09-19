import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {
    return <div>
        {props.list.map(picture => <GalleryItem
        key = {picture.id} 
        item = {picture}
        likeImage = {() => props.likeImage(picture.id)}
        />)}
    </div>;
}

export default GalleryList;