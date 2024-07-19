import logo from './logo.svg';
import './App.css';
import Displayname from './Displayname';
import { useEffect, useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const isblank = (e) => {
    e.preventDefault();
    setFullname(`${firstname}  ${lastname}`)    
  };
  return (
    <div className="App">
       <form onSubmit={isblank}>
        <h1>Full Name Display</h1>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          required
          id="fname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
        {/* <input type="submit" value="Submit" /> */}
        
      </form>
      {
       fullname?<div>Full Name: {fullname}</div>:<></>
      }
     
    </div>
  );
}

export default App;
