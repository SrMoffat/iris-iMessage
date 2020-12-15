import { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [values, setValues] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch("/time").then(response => response.json()).then(data => setCurrentTime(data.time));
  }, []);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newState = { ...values, [name] : value };
    setValues(newState);
  };
  const handleSubmit = async () => {
    setLoading(true);
    if(!values){
      return false; // Form is empty
    } else if(!values.phone) {
      return false; // Required phone is empty
    } else {
      // Set loading to true
      const response = await fetch("/recon", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if(data){
        setLoading(false);
        setResponse(data);
      };
    };
  };
  console.log("LOAD", loading);

  return (
    <div className="App">
      <NavBar currentTime={currentTime}/>
      <div className="app-container">
        <div className="panel">
          <div className="target-image">
            <img height={140} width={140} src="/target.jpeg" alt="Target"/>
          </div>
          <div className="panel-form">
            <form>
              <label className="form-input-label" htmlFor="targetName">Name:</label>
              <input onChange={handleChange} name="name" className="form-input" type="text" /><br />
              <label className="form-input-label" style={{ marginRight: 4 }} htmlFor="targetEmail">Email:</label>
              <input onChange={handleChange} name="email" className="form-input" type="email" /><br />
              <label className="form-input-label" htmlFor="targetPhone">Phone:</label>
              <input required onChange={handleChange} name="phone" className="form-input" type="tel"/><br />
            </form>
          </div>
            <div onClick={handleSubmit} className="recon-btn" type="submit">Recon</div>
        </div>
        <div className="data">
          { loading && <p>Loading...</p>}
          { response && (
            <div>
              <div>{response.target.name}</div>
              <div>{response.target.email}</div>
              <div>{response.target.phone}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
