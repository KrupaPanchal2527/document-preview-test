import "./App.css";
import React from "react";

function App() {
  const [file, setFile] = React.useState(null);
  const [url, setURL] = React.useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
    setFile(blob);

    const url = URL.createObjectURL(blob);
    setURL(url);
  };

  return (
    <div>
      {/* <iframe
        src="https://docs.google.com/gview?url=https://css4.pub/2015/icelandic/dictionary.pdf&embedded=true"
        width="600px"
        height="600px"
        frameborder="1"
        title="test"
      ></iframe> */}

      <h2>Section custom</h2>
      <input type="file" onChange={handleChange} />
     {url && (<>
     <p>{url}</p>
     <iframe
        src={`https://docs.google.com/gview?url=${url}&embedded=true`}
        width="600px"
        height="600px"
        frameborder="1"
      /></>)}
    </div>
  );
}

export default App;
