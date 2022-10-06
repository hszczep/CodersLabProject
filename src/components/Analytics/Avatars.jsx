import { Users } from "../Pages/users";
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../css/Avatars.css";
export default function Avatars() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //   setData(data);
  // };

  function stringToColor(string) {
    let hash = 0;
    let color = "#";
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: { bgcolor: stringToColor(name) },
    };
  }
  return (
    <div>
      <div className="container-avatars">
        <input
          className="search"
          placeholder="Search by surname"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <div className="listAvatar">
          {Users.filter((e) => e.surname.toLowerCase().includes(query)).map(
            (user, id) => (
              <div className="elAvatar" key={id}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  gap={2}
                  padding={0.5}
                >
                  <Avatar {...stringAvatar(user.surname)}>
                    {user.surname[0]}
                  </Avatar>
                  {user.name} {user.surname}
                </Stack>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
