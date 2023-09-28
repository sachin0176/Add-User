import  { useState } from "react";
import "./App.css";
import Card from "./components/UI/card/Card";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";


function App() {
  const [userData, setUserData] = useState([]);
  

  const addUserHandler = (username, age) => {

    const userInput= {
      username: username,
      age: age,
    };
    setUserData((prevUser) => {
      return [...prevUser, userInput];
    });
   
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {userData.length > 0 && (
        <Card>
          {userData.map((user) => (
            <UserList name={user['username']} age={user["age"]} />
          ))}
        </Card>
      )}
     
    </>
  );
}

export default App;
