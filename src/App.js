import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const ref = useRef();

  const [searchQuery, setSearchQuery] = useState([]);
  const handleSearch = () => {
    setSearchQuery(
      users.filter((user) => 
      user.name.toLowerCase().includes(ref.current.value)
      )
    );
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>{
      return res.json();
    })
    .then((data) => setUsers(data));
    } , []);
  return (
    <div className="App">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" placeholder="検索ワードを入力" ref={ref} onChange={() => handleSearch()}/>
        <div className="content">
            {searchQuery.map((user) => (
              <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
