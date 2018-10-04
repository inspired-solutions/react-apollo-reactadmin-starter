/* eslint react/jsx-key: off */
import React from 'react'
import {
  CardActions,
  CloneButton, BooleanInput,
  DisabledInput,
  Edit,
  required,
  SelectInput, ReferenceInput,
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

const EditActions = ({ basePath, className, data, hasShow, hasList, resource, ...rest }) => (
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

const PostEdit = withStyles(styles)(
  ({ classes, ...props }) => {
    return (
      <Edit title="Edit post" actions={<EditActions />}  {...props}>
        <SimpleForm validate={validateUserForm} >
          <DisabledInput source="id" formClassName={classes.email} />
          <ReferenceInput
            label="Author"
            source="author.id"
            reference="User"
            allowEmpty
            validate={required()}
            formClassName={classes.email}
          >
            <SelectInput optionText="name" />
          </ReferenceInput >
          <TextInput source="title" formClassName={classes.email} />
          <TextInput source="text" formClassName={classes.email} />
          <BooleanInput source="isPublished" formClassName={classes.email} />
        </SimpleForm >
      </Edit >
    )
  })

export default PostEdit
