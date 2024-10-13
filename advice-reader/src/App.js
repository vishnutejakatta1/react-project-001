import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  return (
    <div className="App">
      <p>{advice}</p>
      <button onClick={getAdvice}>Get Advice!</button>
      <p>You have read {count} pieces of advices :)</p>
    </div>
  );
}

export default App;
