function GalleryItem(props) {
    return <div key = {props.id}>
        <img src = {props.path} /> <br/>
        <button onClick = {}>Like Button</button>
    </div>;
}

export default GalleryItem;