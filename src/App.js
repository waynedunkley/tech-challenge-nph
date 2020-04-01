import React, { useState } from 'react'
import FormBuilder from './components/FormBuilder'
import data from './cms/formData'
import './App.css'

function App() {
  const [output, setOutput] = useState({})
  const handleSubmit = (form) => {
    const { elements } = form
    const output = {
      name: elements['name'].value,
      dob: elements['dob'].value,
      gender: elements['gender'].value,
      contact: elements['contact'].value,
      consentRequired: elements['consent'].checked,
      guardianName: elements['guardianName'].checked,
      guardianContact: elements['guardianContact'].checked,
    }
    setOutput(output)
  }
  return (
    <div className="app">
      <FormBuilder fields={data.fields} onSubmit={handleSubmit} />
      { output && (
        <div>
          { Object.keys(output).map(field => output[field]) }
        </div>
      ) }
    </div>
  )
}

export default App
