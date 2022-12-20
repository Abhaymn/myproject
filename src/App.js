import React ,{useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(userName,userAge)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:userName,age:userAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;