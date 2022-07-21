import "./App.css";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonPopup(true);
    }, 5000);
    // This is the side effect cleanup function which is called when the component is unmounted.
    // This is useful for cleaning up any resources that were created in the useEffect hook.
    return () => {
      setTimeout(() => {
        setButtonPopup(false);
      }, 8000);
    };
  }, []);

  return (
    <div>
      <main>
        <h1 style={{ marginBottom: "20px" }}>React Popups</h1>
        <button onClick={() => setButtonPopup(!buttonPopup)}>Open Popup</button>
        <Popup buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}>
          <h3>My popup</h3>
          <p>This is my button triggered popup</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
