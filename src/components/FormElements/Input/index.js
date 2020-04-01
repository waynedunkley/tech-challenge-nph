import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, name, label, type }) => (
  <div className='field'>
    { label && <label htmlFor={id} className='label'>{ label }</label> }
    <input type={type} id={id} name={name}></input>
  </div>
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date']).isRequired,
}

Input.defaultProps = {
  label: null,
}

export default Input