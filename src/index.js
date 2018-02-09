import React from 'react';
import { render } from "react-dom";
import "babel-polyfill";

import App from './App';

document.addEventListener('DOMContentLoaded',()=>{
  render(<App />, document.getElementById('root'));
})
