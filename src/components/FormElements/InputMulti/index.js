import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ name, label, options, type }) => (
  <>
    { label && <p>{ label }</p> }
    { options && options.map(option => (
      <div key={option.value}>
        <input type={type} id={option.id} name={name} value={option.value} />
        <label htmlFor={option.id}>{ option.label }</label>
      </div>
    )) }
  </>
)

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
}

Radio.defaultProps = {
  label: null,
}

export default Radio