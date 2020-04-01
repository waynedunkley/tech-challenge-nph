import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ name, label, options, type, required }) => (
  <div className='field'>
    { label && <p>{ label }</p> }
    { options && options.map(option => (
      <div key={option.value}>
        <input type={type} id={option.id} name={name} value={option.value} required={required} />
        <label htmlFor={option.id}>{ option.label }</label>
      </div>
    )) }
  </div>
)

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  required: PropTypes.bool,
}

Radio.defaultProps = {
  label: null,
  required: false,
}

export default Radio