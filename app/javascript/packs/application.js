import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello_react.jsx';

console.log('Hello World from Webpacker')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
