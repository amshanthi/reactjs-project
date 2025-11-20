import { useEffect, useState } from "react";
import QuoteBox from "./QuoteComponent/QuoteBox";

function App() {
  const URL = "https://dummyjson.com/quotes";
  const [data, setQuote] = useState([]);
  const [random, setRandom] = useState(0);
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote(data.quotes);
      });
  }, []);

  function randomGenerator() {
    setRandom(Math.floor(Math.random() * data.length));
  }
  if (!data || data.length === 0) {
    return (
      <p
        className="d-flex flex-row justify-content-center align-content-center mt-5 text-primary"
        style={{ fontSize: "30px" }}
      >
        Loading quote...
      </p>
    );
  }
  return (
    <div className="d-flex flex-column justify-content-center align-content-center border border-2 m-2 p-4 rounded shadow-sm bg-danger ">
      <h1 className="d-flex flex-row justify-content-center bg-warning p-3 rounded-4 shadow text-decoration-underline ">
        Today Quote
      </h1>
      <div className="d-flex flex-row justify-content-around  border border-3 p-4 m-3 rounded-5 ">
        <QuoteBox data={data[random]} />
      </div>
      <div className="text-center">
        <button
          className="btn btn-dark btn-sm px-4 rounded-3 bg-gradient border border-3 h-75"
          style={{ fontSize: "25px" }}
          onClick={randomGenerator}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
