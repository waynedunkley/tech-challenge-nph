import React from 'react'
import FormBuilder from './components/FormBuilder'
import data from './cms/formData'
import './App.css'

function App() {
  return (
    <div className="app">
      <FormBuilder data={data} />
    </div>
  )
}

export default App
