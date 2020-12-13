import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="App">
      <ul className="contentWrapper">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <li key={item.id} className="item">
                <div>
                  <img className="img" src={item.avatar} />
                </div>
                <div className="info">
                  <p>
                    <strong>
                      {item.first_name} {item.last_name}
                    </strong>
                  </p>
                  <p>{item.email}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;