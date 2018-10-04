/* eslint react/jsx-key: off */
import React from 'react'

import {
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin'

import { withStyles } from '@material-ui/core/styles'

const stylesCreate = {
  width: { width: '5em' },
  widthForm: { display: 'inline-block' },
  height: { width: '5em' },
  heightForm: { display: 'inline-block', marginLeft: 32 },
  address: { maxWidth: 544 },
  email: { width: 544 },
  age: { width: 544 },
  name: { display: 'inline-block' }
}

const validateUserForm = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = ['The firstName is required']
  }
  if (!values.email) {
    errors.email = ['Please enter the email']
  }
  if (!values.age) {
    errors.age = ['The age is required']
  } else if (values.age < 0 || values.age > 150) {
    errors.age = ['Must be a valid age']
  }
  return errors
}


const UserCreate = withStyles(stylesCreate)(({ classes, ...props }) => {
  return (
    <Create title="Create user" {...props} >
      <SimpleForm validate={validateUserForm} >
        <TextInput source="name" />
        <TextInput
          type="email"
          source="email"
          validation={{ email: true }}
          options={{ fullWidth: true }}
        />
        <NumberInput
          source="age"
        />
        <SelectInput
          source="accessRole"
          choices={[
            { id: 'USER', name: 'User' },
            { id: 'ADMIN', name: 'Admin' }
          ]}
        />
      </SimpleForm >
    </Create >
  )
})

export default UserCreate

