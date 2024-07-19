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
        <label for="fname">First Name :</label>
        <input
          type="text"
          required
          id="fname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <label for="lname">Last Name :</label>
        <input
          type="text"
          id="lname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <h3>{fullname}</h3>
    </div>
  );
}
