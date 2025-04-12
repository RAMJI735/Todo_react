import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import ContextState from './contextapi/ContextState'
import Form from './components/Form'

function App() {

  return (
    <>
    <ContextState>
   <Form/>

    </ContextState>
      
    </>
  )
}

export default App
