import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, name, label, type, required }) => (
  <div className='field'>
    { label && <label htmlFor={id} className='label'>{ label }</label> }
    <input type={type} id={id} name={name} required={required}></input>
  </div>
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date']).isRequired,
  required: PropTypes.bool,
}

Input.defaultProps = {
  label: null,
  required: false,
}

export default Input