import './App.css';
import React from "react";

function App() {
  
  let q = [1, 2, 3];

  return (
    <div className="container">
    {q[q.length - 1]}
    </div>
  );
};

export default App;
