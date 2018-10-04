/* eslint react/jsx-key: off */
import React from 'react'
import {
  EditButton,
  Datagrid,
  ReferenceManyField,
  Show, SelectField,
  SimpleShowLayout,
  TextField
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

const UserShow = withStyles(stylesCreate)(({ classes, ...props }) => {
  return (
    <Show title="Show user" {...props}>
      <SimpleShowLayout >
        <TextField source="id" />
        <TextField source="name" formClassName={classes.name} />
        <TextField source="age" formClassName={classes.age} />
        <TextField source="email" formClassName={classes.email} />
        <SelectField
          source="accessRole"
          choices={[
            { id: 'USER', name: 'User' },
            { id: 'ADMIN', name: 'Admin' }
          ]}
        />

        <ReferenceManyField
          label="Comments"
          reference="Post"
          target="author.id"
        >
          <Datagrid >
            <TextField source="title" />
            <TextField source="text" />
            <EditButton />
          </Datagrid >
        </ReferenceManyField >

      </SimpleShowLayout >
    </Show >
  )
})

export default UserShow
