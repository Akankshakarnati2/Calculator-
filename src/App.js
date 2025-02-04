import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="calculator">
      <input type="text" value={input} name="input" onChange={handler} />
      <div className="calculator-grid">
        {/* Number Buttons */}
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button className="special" onClick={() => setInput(input + '+')}>+</button>

        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button className="special" onClick={() => setInput(input + '-')}>-</button>

        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button className="special" onClick={() => setInput(input + '*')}>*</button>

        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '.')}>.</button>
        <button onClick={() => setResult(eval(input))}>=</button>
        <button className="special" onClick={() => setInput(input + '/')}>/</button>

        {/* Clear Button */}
        <button className="clear" onClick={() => { setInput(''); setResult(0); }}>C</button>
      </div>
      <h4>Result is: {result}</h4>
    </div>
  );
};

export default App;
