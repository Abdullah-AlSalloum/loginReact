import React from "react";
import Form from "./Form";
import Input from './Input';

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form
       isRegisterd={userIsRegistered}
       />
    </div>
  );
}

export default App;
