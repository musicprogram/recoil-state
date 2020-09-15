import React,{useEffect} from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    const getRepos = async ()=>{
      const urlAll = 'https://jsonplaceholder.typicode.com/users/';
      const resp = await fetch(urlAll);
      const body = await resp.json();
      console.log(body);
    };

    getRepos();
  },[])

  return (
    <div className="App">
     Recoil
    </div>
  );
}

export default App;
