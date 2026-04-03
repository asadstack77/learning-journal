import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [visible, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(!visible);
  };
  return (
    <>
      <div className="container mt-5">
        <h1
          style={{
            textAlign: "center",
            color: "dodgerblue",
            border: "1px solid dodgerblue",
            padding: '10px',
            borderRadius: '10px'
          }}
        >
          <marquee direction="down" className='text-center'>
            Alert Component
          </marquee>
        </h1>
        {visible && <Alert onClick={handleClick} />}
        <Button onClick={() => setVisibility(true)} title="Click to Reveal" />
      </div>
    </>
  );
};

export default App;
