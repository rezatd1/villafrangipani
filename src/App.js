import React from "react";

import './assets/sass/baseVariables/Color.scss';
import './assets/sass/baseVariables/Fonts.scss';
import Home from "./views/home/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Villa Frangipani Canggu</title>
        <meta name="description" content="Frangipani, your private villa in Canggu, Bali." />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
