// App.js
import React from 'react'
import PhotoOne from "./components/PhotoOne";
import PhotoTwo from "./components/PhotoTwo";

function App() {
  console.log("APP - ", (new Date).toLocaleTimeString())
  const [message, setMessage] = React.useState("");
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {     
    fetch("https://jsonplaceholder.typicode.com/photos")         
      .then(response => response.json())
      .then(setPhotos);   
  }, [setPhotos]);
 
  return (
    <div>
      <input
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <div className="photos" style={{display: 'flex'}}>
        <PhotoOne photos={photos} message={message} />
        <PhotoTwo photos={photos} message={message} />
      </div>
    </div>
  );
}

export default App;