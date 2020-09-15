import React,{useEffect} from 'react';
import './App.css';
import { useRecoilState, useRecoilValue } from "recoil";
import { userState as userAtom, view as viewAtom } from "./atoms";

import Menu from "./Menu";

function App() {

  const [users, setUsers] = useRecoilState(userAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(()=>{
    const getUsers = async ()=>{
      const urlAll = `https://jsonplaceholder.typicode.com/${view}`;
      const resp = await fetch(urlAll);
      const body = await resp.json();
      setUsers(body);
      console.log(body);
    };

    getUsers();
  },[view])

  return (
    <div className="App">
      <h1>
        <b>
          JSONPLACEHOLDER
        </b>
      </h1>
      <Menu/>
      <h1>...</h1>
      {users.map((user)=>{
        return(
          <div key={user.id}>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
          </div>
        )
      })
      }
     Recoil
    </div>
  );
}

export default App;
