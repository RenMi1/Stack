import React, { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = (value) => {
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
    const newStack = createNewStack(stack, value);
    setStack(newStack);
  };

  const createNewStack = (oldStack, value) => {
    const newStack = new Array(oldStack.length + 1);
    for (let i = 0; i < oldStack.length; i++) {
      newStack[i + 1] = oldStack[i];
    }
    newStack[0] = value;
    return newStack;
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    const newStack = removeTopValue(stack);
    setStack(newStack);
  };

  const removeTopValue = (oldStack) => {
    if (oldStack.length === 0) return [];
    const newStack = new Array(oldStack.length - 1);
    for (let i = 0; i < oldStack.length - 1; i++) {
      newStack[i] = oldStack[i + 1];
    }
    return newStack;
  };

  return (
    <div className="stack-container">
      <div className="stack-input-container">
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="stack-input"
        />
        <button
          onClick={() => {
            const value = parseInt(inputValue);
            handlePush(value);
          }}
          className="stack-button"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="stack-button"
        >
          Pop
        </button>
      </div>
      <div className="stack-table-container">
        <table className="stack-table">
          <tbody>
            {stack.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stack;
