import React from 'react'
import Input from '../../components/FormElements/Input'
import InputMulti from '../../components/FormElements/InputMulti'

const componentSelector = {
  text: Input,
  date: Input,
  radio: InputMulti,
  checkbox: InputMulti,
}

const FormBuilder = ({ data }) => {
  const fields = data.fields.map(field => {
    const Component = componentSelector[field.type]
    if (Component) {
      return <Component {...field} name={field.id} key={field.id} />
    }
    return null
  })
  return (
    <>
      { fields }
    </>
  )
}

export default FormBuilder
