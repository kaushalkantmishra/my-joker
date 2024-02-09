import { useEffect, useState } from "react";
import "./Joker.css";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJock = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };
  useEffect(() => {
    async function getFirstJock() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJock();
  }, []);
  
  return (
    <div className="joker-container">
      <div className="joker-header">
        <h1> My Joker!</h1>
      </div>
      <div className="joker-joke-container">
        <h2 className="joker-setup">{joke.setup}</h2>
        <h3 className="joker-punchline">{joke.punchline}</h3>
      </div>
      <div>
        <button className="joker-button" onClick={getNewJock}>New Joke</button>
      </div>
    </div>
  );
}
