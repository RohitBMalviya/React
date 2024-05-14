import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>counter {count}</h1>
        <button
          onClick={() => {
            if (count >= 20) {
              setCount(20);
            } else {
              setCount(count + 1);
              // interview question
              // setCount(count + 1);
              // setCount(count + 1);
              // setCount(count + 1);
              // setCount(count + 1);
              // it will update state only 1 time
              // setCount((previousCounter) => previousCounter + 1);
              // setCount((previousCounter) => previousCounter + 1);
              // setCount((previousCounter) => previousCounter + 1);
              // setCount((previousCounter) => previousCounter + 1);
              // it will update state 4 time
            }
          }}
          style={{ padding: "10px" }}
        >
          increase
        </button>
        <br />
        <button
          onClick={() => {
            if (count <= 0) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }}
          style={{ padding: "10px" }}
        >
          decrease
        </button>
        <br />
        <button onClick={() => setCount(0)} style={{ padding: "10px" }}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
