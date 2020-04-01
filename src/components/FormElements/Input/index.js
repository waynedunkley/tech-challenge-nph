import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, name, label, type }) => (
  <>
    { label && <label htmlFor={id}>{ label }</label> }
    <input type={type} id={id} name={name}></input>
  </>
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