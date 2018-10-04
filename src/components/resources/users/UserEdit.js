/* eslint react/jsx-key: off */
import React from 'react'
import {
  CardActions,
  CloneButton,
  DisabledInput,
  Edit,
  NumberInput,
  required,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput
} from 'react-admin'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  width: { width: '5em' },
  widthForm: { display: 'inline-block' },
  height: { width: '5em' },
  heightForm: { display: 'inline-block', marginLeft: 32 },
  address: { maxWidth: 544 },
  email: { width: 544 },
  age: { width: 544 },
  name: { display: 'inline-block' }
}


const EditActions = ({
                       basePath,
                       className,
                       data,
                       hasShow,
                       hasList,
                       resource,
                       ...rest
                     }) => (
  <CardActions className={className} {...rest}>
    <CloneButton
      className="button-clone"
      basePath={basePath}
      record={data}
    />
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </CardActions >
)


const validateUserForm = (values) => {
  const errors = {}
  if (!values.age) {
    errors.age = ['The age is required']
  } else if (values.age < 0 || values.age > 150) {
    errors.age = ['Must be a valid age']
  }
  return errors
}

const UserEdit = withStyles(styles)(
  ({ classes, ...props }) => {
    console.log('userEdit', classes)
    return (
      <Edit title="Edit user" actions={<EditActions />}  {...props}>
        <SimpleForm validate={validateUserForm} >
          <DisabledInput source="id" />
          <TextInput source="name" />
          <TextInput
            type="email"
            source="email"
            validation={{ email: true }}
            options={{ fullWidth: true }}
          />
          <NumberInput
            source="age"
            validate={required()}
            className={classes.age}
          />
          <SelectInput
            source="accessRole"
            choices={[
              { id: 'USER', name: 'User' },
              { id: 'ADMIN', name: 'Admin' }
            ]}
          />
        </SimpleForm >
      </Edit >
    )
  })

export default UserEdit
