import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:8000/users").then((res) =>
        res.json()
      );
      setUsers(data);
    }
    getData();
  }, []);

  return (
    <>
      <div>
        {users.map((el) => (
          <div>
            {el.id}.{el.first_name}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
