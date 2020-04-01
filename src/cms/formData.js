export default {
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      id: 'dob',
      type: 'date',
      label: 'Date of Birth',
      required: true,
    },
    {
      id: 'gender',
      type: 'radio',
      label: 'Gender',
      options: [{
        id: 'genderMale',
        value: 'male',
        label: 'Male',
      }, {
        id: 'genderFemale',
        value: 'female',
        label: 'Female',
      }],
      required: false,
    },
    {
      id: 'contact',
      type: 'text',
      label: 'Contact Number',
      required: false,
    },
    {
      id: 'consent',
      type: 'checkbox',
      label: 'Requires Consent',
      options: [{
        id: 'consentYes',
        value: 'yes',
        label: 'Yes',
      }],
      required: false,
    },
    {
      id: 'guardianName',
      type: 'text',
      label: 'Guardian Name',
      required: false,
    },
    {
      id: 'guardianContact',
      type: 'text',
      label: 'Guardian Contact',
      required: false,
    },
  ]
}