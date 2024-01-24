import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [msg, setMsg] = useState("Aucun upload effectué");

  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/upload/avatar`, formData)
      .then(() => {
        setMsg("Upload réussi !");
      })
      .catch(() => {
        setMsg("Upload échoué !");
      });
  };

  return (
    <div className="App">
      <h1>TOTO LE HARICOT</h1>

      <form onSubmit={hSubmit}>
        <input type="file" ref={inputRef} />
        <button type="submit">Envoyer!</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default App;
