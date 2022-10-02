import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const reverseOnClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className={`mb-3 container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>{props.heading}</h2>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={handleChange}
          value={text}
          rows="8"
        ></textarea>
        <button className="mt-3 btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="mt-3 btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="mt-3 btn btn-primary" onClick={reverseOnClick}>
          Reverse Text
        </button>
      </div>
      <div
        className={`mb-3 container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Your text summary</h3>
        <p>
          {text.trim().split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
