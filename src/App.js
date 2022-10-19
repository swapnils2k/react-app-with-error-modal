import React, { useState } from 'react';

import AddUser from "./components/Users/AddUser";
import UserList from './components/Users/UserList';


function App() {
const [users, setUsers] = useState([]);

const onAddUserHandler = (user) => {
  setUsers((prevList) => {
    return [...prevList, {id: user.id, username: user.username, age: user.age},];
  });
};

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
