import "./App.css";
import axios from "axios"
import { useEffect, useState } from "react";

const apiURL = "https://the-zone-db.herokuapp.com/Session";

const App = () => {
  const [session, setSession] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(apiURL).then(re => {
      setSession(re.data)
      setContent(re.data.content)
    })
  }, [session])

  const handleUpdate = (text) => {
    axios.put(apiURL, {...session, content: text}).then(re => {
      axios.get(apiURL).then(re => {
        setSession(re.data)
        setContent(re.data.content)
      })
    })
  }

  const handleChange = (event) => {
    setContent(event.target.value)
    handleUpdate(event.target.value)
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
      <textarea className="codeArea" defaultValue={content} onChange={handleChange} />
    </div>
  );
};

export default App;
