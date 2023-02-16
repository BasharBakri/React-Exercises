import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting'

const isLoggedIn = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Greeting isLoggedIn={isLoggedIn} />
)