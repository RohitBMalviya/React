import { useState } from "react";

function App() {
  // const [background, setBackground] = useState("white");
  const [background, setBackground] = useState("white");
  const [stop, setstop] = useState(null);

  const changeBackground = () => {
    const object = [
      "violet-900",
      "indigo-900",
      "blue-900",
      "green-900",
      "yellow-500",
      "orange-600",
      "red-700",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setBackground(object[index]);
      index++;
      if (index === 6) {
        index = 0;
      }
    }, 500);
    console.log(interval);
    setstop(interval);
  };

  const stopInterval = () => {
    clearInterval({ stop });
    setstop(null);
  };

  return (
    <>
      <div
        className={`h-screen bg-${background} flex flex-col justify-center items-center`}
      >
        <button
          onClick={changeBackground}
          className="bg-black text-white p-4 rounded-full"
        >
          start
        </button>
        <br />
        <button
          onClick={stopInterval}
          className="bg-black text-white p-4 rounded-full"
        >
          stop
        </button>
      </div>
      {/* <div className={`h-screen bg-${background} relative`}>
        <div className="absolute bg-gray-900 rounded-3xl  bottom-10 space-x-10 left-[20%] px-10 py-2">
          <button
            className="border-4 border-black rounded-2xl bg-white text-black px-4 py-2"
            onClick={() => {
              setBackground("white");
            }}
          >
            Default
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-violet-900 text-white px-4 py-2"
            onClick={() => {
              setBackground("violet-900");
            }}
          >
            Violet
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-indigo-900 text-white px-4 py-2"
            onClick={() => {
              setBackground("indigo-900");
            }}
          >
            Indigo
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-blue-900 text-white px-4 py-2"
            onClick={() => {
              setBackground("blue-900");
            }}
          >
            Blue
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-green-900 text-white px-4 py-2"
            onClick={() => {
              setBackground("green-900");
            }}
          >
            Green
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-yellow-500 text-white px-4 py-2"
            onClick={() => {
              setBackground("yellow-500");
            }}
          >
            Yellow
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-orange-600 text-white px-4 py-2"
            onClick={() => {
              setBackground("orange-600");
            }}
          >
            Orange
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-red-700 text-white px-4 py-2"
            onClick={() => {
              setBackground("red-700");
            }}
          >
            Red
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-black text-white px-4 py-2"
            onClick={() => {
              setBackground("black");
            }}
          >
            Black
          </button>
          <button
            className="border-4 border-black rounded-2xl bg-pink-600 text-white px-4 py-2"
            onClick={() => {
              setBackground("pink-600");
            }}
          >
            Pink
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
