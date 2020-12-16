// PhotoOne.js
import {memo} from 'react'
const PhotoOne = ({ message = "", photos = [] }) => {
  console.log("one - ", (new Date).toLocaleTimeString())
  return (
    <div>
      <h1>PhotoOne</h1>
      <p>{message}</p>
      <ul>
        {photos.map(photo => {
          return (
            <li key={photo.id}>
              <img src={photo.url} alt={photo.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(PhotoOne);