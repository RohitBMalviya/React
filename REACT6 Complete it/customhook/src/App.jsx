import InputBox from "./InputBox";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white mb-6">Curreny Converter</h1>
        <form
          className="flex flex-col justify-center items-center relative bg-gray-300 h-[34rem] 
        gap-12 rounded-3xl w-[55rem]"
        >
          <InputBox label={"From"} />
          <button
            type="button"
            className="rounded-xl text-2xl bg-yellow-500 py-3 px-6 font-semibold text-white
           hover:bg-yellow-600 border-8 border-white absolute translate-y-[-90%]"
          >
            SWAP
          </button>

          <InputBox label={"To"} />

          <button
            type="submit"
            className="rounded-xl text-2xl bg-blue-800 py-4 px-40 font-semibold text-white
           hover:bg-blue-500 border-8 border-white"
          >
            Convert {"abc"} to {"def"}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
