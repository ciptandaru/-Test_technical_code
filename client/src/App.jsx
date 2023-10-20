import {useState} from "react";
// import "./App.css";
import axios from "axios";

function App() {
  const [InputNumber, setInputNumber] = useState("");
  const [validationResult, setValidationResult] = useState("");
  const [result, setResult] = useState("");

  const validationNumber = () => {
    const number = parseInt(InputNumber);
    if (!isNaN(number)) {
      setValidationResult("angka valid");
    } else {
      setValidationResult("angka tidak valid");
    }
  };

  const executeOperation = (operation) => {
    axios
      .post("http://localhost:3000/execute", {operation, number: InputNumber})
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const generateSegitiga = () => {
    const number = InputNumber.toString();
    let segitiga = "";
    for (let i = 0; i < number.length; i++) {
      let line = "";
      for (let j = 0; j <= i; j++) {
        line += number[j];
      }
      segitiga += line + "\n";
    }
    setResult(segitiga);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Input Angka"
          value={InputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button onClick={validationNumber}>Validasi</button>
        <button onClick={generateSegitiga}>Generate Segitiga</button>
        <button onClick={() => executeOperation("generateOddNumber")}>
          Generate Bilangan Ganjil
        </button>
        <button>Generate Bilangan Prima</button>
        <div>{validationResult}</div>
        <div>{result}</div>
      </div>
    </>
  );
}

export default App;
