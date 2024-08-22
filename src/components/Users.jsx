import axios from "axios";
import { useState } from "react";

const URL = "https://reqres.in/api/users";

const Users = () => {
  const [user, setUser] = useState([]);

  const changeHandler = async () => {
    const request = await axios.get(URL);
    setUser(request.data.data);
  };

  return (
    <div>
      <button onClick={changeHandler}>Click Me</button>

      <div>
        {user.map((item) => {
          return <p key={item.id}>{item.email}</p>;
        })}
      </div>
    </div>
  );
};

export default Users;
