import "./App.css";
import axios from "axios"
import { useEffect, useState } from "react";

const apiURL = "https://the-zone-db.herokuapp.com/Session"

const App = () => {
  const [session, setSession] = useState("")

  useEffect(() => {
    axios.get(apiURL).then(re => {
      setSession(re.data)
    })
  }, [session])

  const handleChange = (event) => {
    let newContent = event.target.value;

    axios.put(apiURL, {...session, content: newContent}).then(re => {
      axios.get(apiURL).then(re => {
        setSession(re.data)
      })
    })
  }

  return (
    <div
      style={{
        margin: 0,
        backgroundColor: "#261C2C",
        height: "100vh",
        color: "#6E85B2",
        padding: "10px",
        // boxSizing: "border-box",
      }}
    >
      <textarea className="codeArea" value={session.content} onChange={handleChange} />
    </div>
  );
};

export default App;
