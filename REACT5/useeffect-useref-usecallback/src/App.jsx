import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [haveNumber, setHaveNumber] = useState(false);
  const [haveCharacter, setHaveCharacter] = useState(false);
  const [charactorLength, setCharactorLength] = useState(8);
  const [password, setPassword] = useState("");
  const [shadow, setShadow] = useState("none");
  const passwordRef = useRef(null);

  const GeneratePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (haveNumber) {
      str += "0123456789";
    }
    if (haveCharacter) {
      str += "!@#$%&*";
    }
    for (let i = 1; i <= charactorLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [haveNumber, haveCharacter, charactorLength, setPassword]);

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(1, 10);
    window.navigator.clipboard.writeText(password);
    setShadow("slate-200");
  }, [password]);
  useEffect(() => {
    GeneratePassword();
    setShadow("none");
  }, [haveNumber, haveCharacter, charactorLength, setPassword]);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div
          className={`flex flex-col justify-center items-center text-black gap-12 w-[50rem] bg-cyan-500 p-6 
          rounded-3xl shadow-2xl shadow-${shadow}`}
        >
          <h1 className="text-6xl">Password Generator</h1>
          <div className="space-x-2">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              className="rounded-xl p-4 text-black text-2xl font-bold w-[40rem]"
              readOnly
            />
            <button
              className="rounded-xl text-2xl bg-blue-800 p-4 font-semibold text-white hover:bg-blue-500"
              onClick={copyClipboard}
            >
              COPY
            </button>
          </div>
          <div className="space-x-10">
            <span>
              <input
                type="range"
                name=""
                id=""
                min={1}
                max={30}
                value={charactorLength}
                onChange={(event) => setCharactorLength(event.target.value)}
              />
              <label className="text-2xl font-semibold">
                {" "}
                - Length:{charactorLength}
              </label>
            </span>
            <span className="space-x-2 inline-flex items-center">
              <label htmlFor="Number" className="text-2xl font-semibold">
                Number
              </label>
              <input
                className="w-[25px] h-[25px]"
                type="checkbox"
                id="Number"
                defaultChecked={haveNumber}
                onChange={() => setHaveNumber(!haveNumber)}
              />
            </span>
            <span className="space-x-2 inline-flex items-center">
              <label htmlFor="Charactor" className="text-2xl font-semibold">
                Charactor
              </label>
              <input
                className="w-[25px] h-[25px]"
                type="checkbox"
                id="Charactor"
                defaultChecked={haveCharacter}
                onChange={() => setHaveCharacter(!haveCharacter)}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
