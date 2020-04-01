import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../components/FormElements/Input'
import InputMulti from '../../components/FormElements/InputMulti'

const componentSelector = {
  text: Input,
  date: Input,
  radio: InputMulti,
  checkbox: InputMulti,
}

const FormBuilder = ({ fields, onSubmit }) => {
  const formComponents = fields.map(field => {
    const Component = componentSelector[field.type]
    if (Component) {
      return <Component {...field} name={field.id} key={field.id} />
    }
    return null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.currentTarget)
  }
  return (
    <form onSubmit={handleSubmit}>
      { formComponents }
      <button type='submit'>Submit</button>
    </form>
  )
}

FormBuilder.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default FormBuilder
