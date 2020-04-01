import React from 'react'
import Input from '../../components/FormElements/Input'
import InputMulti from '../../components/FormElements/InputMulti'

const Form = () => (
  <>
    <Input
      id='name'
      name='name'
      label='Name'
      type='text'
    />
    <br /><br />
    <Input
      id='date'
      name='date'
      label='Date'
      type='date'
    />
    <br /><br />
    <InputMulti
      name='gender'
      label='Gender'
      type='radio'
      options={[
        {
          id: 'genderMale',
          value: 'male',
          label: 'Male',
        },
        {
          id: 'genderFemale',
          value: 'female',
          label: 'Female',
        }
      ]}
    />
    <br /><br />
    <Input
      id='contact'
      name='contact'
      label='Contact Number'
      type='text'
    />
    <br /><br />
    <InputMulti
      name='consent'
      label='Require guardian consent'
      type='checkbox'
      options={[
        {
          id: 'consentYes',
          value: 'yes',
          label: 'Yes',
        },
      ]}
    />
    <br /><br />
    <Input
      id='guardianName'
      name='guardianName'
      label='Guardian Name'
      type='text'
    />
    <br /><br />
    <Input
      id='guardianContact'
      name='guardianContact'
      label='Guardian Contact'
      type='text'
    />
  </>
)

export default Form