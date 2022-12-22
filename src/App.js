import React ,{useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(userName,userAge,userCollegename)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:userName,age:userAge,college:userCollegename}];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </>
  );
}

export default App;
