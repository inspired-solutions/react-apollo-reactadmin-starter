/* eslint react/jsx-key: off */
import React from 'react'
import {
  Pagination,
  Responsive, NumberField,
  SimpleList,
  Filter,
  NumberInput,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextInput,
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

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Name" source="name" />
    <NumberInput label="Age" source="age" />
    <TextInput label="Email" source="email" />
    <TextInput label="AccessRole" source="accessRole" />
  </Filter >
)
const UserPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

const UserList = withStyles(stylesCreate)(
  ({ permissions, classes, ...props }) => {
    return (
      <List title="All users"
        filters={<UserFilter permissions={permissions} />}
        perPage={20}
        sort={{ field: 'name', order: 'ASC' }}
        pagination={<UserPagination />}
        {...props} >
        <Responsive
          small={
            <SimpleList
              primaryText={record => record.name}
              secondaryText={record => `Age: ${record.age}`}
              tertiaryText={record => record.email}
            />
          }
          medium={
            <Datagrid >
              <TextField source="name" formClassName={classes.username} />
              <TextField source="email" formClassName={classes.email} />
              <NumberField source="age" formClassName={classes.email} />
              <TextField source="accessRole" formClassName={classes.email} />
              <EditButton />
              <DeleteButton />
              <ShowButton />
            </Datagrid >
          }
        />
      </List >
    )
  })

export default UserList
