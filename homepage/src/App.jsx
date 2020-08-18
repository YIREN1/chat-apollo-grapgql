import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from 'chat/Chat';
const App = () => (
  <div>
    <p>Hi there, I'm React from Webpack 5.</p>
    <Chat />
    <p>asdasdasdas</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
