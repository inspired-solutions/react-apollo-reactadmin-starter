/* eslint react/jsx-key: off */
import React from 'react'
import {
  Create, BooleanInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required
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


const PostCreate = withStyles(stylesCreate)(({ classes, ...props }) => {
  return (
    <Create title="Create post" {...props} >
      <SimpleForm validate={validateUserForm} >
        <ReferenceInput
          label="Author"
          source="author.id"
          reference="User"
          allowEmpty
          validate={required()}
        >
          <SelectInput optionText="name" />
        </ReferenceInput >
        <TextInput source="title" />
        <TextInput source="text" />
        <BooleanInput source="isPublished" />
      </SimpleForm >
    </Create >
  )
})

export default PostCreate

