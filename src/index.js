import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StateProvider } from "./Components/StateProvider";
//importing reducer and intialState from reducer.js 
import reducer, { initialState } from "./Components/reducer";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <React.StrictMode>
  {/* passing the intialState,reducer which was imported from reducer.js to Stateprovider component as props  */}
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
</React.StrictMode>;
root.render(element);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { StateContext as StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>

//       <App />
//     </StateProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
