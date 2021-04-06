import React, { useState } from "react";

const Form = () => {
    const [state, setState] = useState('')
  return (
    <div className="m-8 bg-indigo-200 ">
      <h1 className="text-red-500 ml-3 pt-2 font-bold">{state}</h1>
      <form>
        <button className="shadow-lg bg-red-400 m-5 w-40 h-9 rounded-lg text-red-50 hover:bg-red-700 active:bg-yellow-200">
          Hover
        </button>
        <input value={state} onChange={(e) => {setState(e.target.value)}} className="h-9 p-3 focus:ring-blue-600 shadow-lg rounded-lg" placeholder="Enter some text" />
      </form>
    </div>
  );
};

export default Form;
