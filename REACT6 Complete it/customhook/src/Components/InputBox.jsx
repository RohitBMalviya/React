import React from "react";

function InputBox({ label }) {
  return (
    <>
      <div>
        <div
          className="flex justify-around items-center text-gray-500 w-[50rem] bg-white py-8
          rounded-3xl shadow-2xl"
        >
          <span className="space-x-2">
            <label htmlFor={`${label}`} className="text-2xl font-semibold ">
              {label} :
            </label>
            <input
              id={`${label}`}
              className="rounded-xl p-4 text-black text-2xl font-bold w-60"
              type="number"
              placeholder="0"
            />
          </span>
          <span className="space-x-2">
            <label htmlFor={`${label}1`} className="text-2xl font-semibold">
              Currency Type :
            </label>
            <select
              className="rounded-xl p-2 text-black text-2xl font-medium"
              id={`${label}1`}
            >
              <option>abc</option>
            </select>
          </span>
        </div>
      </div>
    </>
  );
}

export default InputBox;
