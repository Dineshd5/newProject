import "./App.css";
import StyledButton from "./Components/Buttons/Button";

function App() {
  return (
    <>
      <div className="App">
        <button>button</button>
        <StyledButton>styled buton</StyledButton>
        <br />
        <StyledButton varient="outline">styled button</StyledButton>
      </div>
    </>
  );
}

export default App;
