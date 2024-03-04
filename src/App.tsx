import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div className="">
      <Home />
      {play ? (
        <video />
      ) : (
        <div className="relative" onClick={() => setPlay(true)}>
          <img src="" alt="" />
          <div className="absolute"></div>
        </div>
      )}
    </div>
  );
}

export default App;
