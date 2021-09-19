# Weekend Assignment Four: Gallery of My Life


## Description

''Duration: Weekend Sprint''

A gallery of items relevant to my life, built in React. Each item in the gallery includes a like counter, a button to add additional likes, and a description which can be viewed by clicking the image.

### To-Do List
- [X] Use `axios` to retrieve data from the gallery module and store it in `App.jsx`
- [X] Create a `GalleryList` component to store all gallery data
- [X] Create a `GalleryItem` component to store a single instance of an image in a gallery
- - [X] Should contain the number of likes, a like button, an image, and a description
- - [X] Image should swap places with description when clicked
- - [X] Like button makes an `Axios` `PUT` call, increasing the number of likes for the specified image
- []