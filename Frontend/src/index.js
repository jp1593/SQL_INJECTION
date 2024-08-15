import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Secure from './Secure';
import Insecure from './Insecure'; 

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [isSecure, setIsSecure] = useState(false);

  const handleSecureClick = () => {
    setIsSecure(true);
  };

  const handleInsecureClick = () => {
    setIsSecure(false);
  };

  return (
    <React.StrictMode>
      <div className='flex flex-col'>
        <button onClick={handleSecureClick}>Secure</button>
        <button onClick={handleInsecureClick}>Insecure</button>
      </div>
      {isSecure ? <Secure /> : <Insecure />}
    </React.StrictMode>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();