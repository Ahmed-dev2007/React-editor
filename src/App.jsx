import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const makeBold = () => {
    const textarea = document.getElementById("editor");
    textarea.style.fontWeight = "bold";
  };

  const makeItalic = () => {
    const textarea = document.getElementById("editor");
    textarea.style.fontStyle = "italic";
  };

  const underlineText = () => {
    const textarea = document.getElementById("editor");
    textarea.style.textDecoration = "underline";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Text editor</h1>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div>
        <button onClick={toUpperCase}>UPPER CASE</button>
        <button onClick={toLowerCase}>lower case</button>
        <button onClick={underlineText}>Underline</button>
        <button onClick={makeBold}>Bold</button>
        <button onClick={makeItalic}>Italic</button>
        <button onClick={copyToClipboard}>Copy</button>
        <button onClick={clearText}>Clear</button>
      </div>
    </div>
  );
}

export default App;
