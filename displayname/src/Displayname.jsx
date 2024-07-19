import { useState } from "react";

export default function Displayname() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const isblank = (e) => {
    e.preventDefault();
    setFullname(`${firstname}  ${lastname}`);
  };
  return (
    <div>
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
        {
        fullname&& <h3>Full Name: {fullname}</h3>
      }
      </form>
      
     
    </div>
  );
}
