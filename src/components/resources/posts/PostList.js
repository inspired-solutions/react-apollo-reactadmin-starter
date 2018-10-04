/* eslint react/jsx-key: off */
import React from 'react'
import {
  Pagination,
  Responsive,
  SimpleList,
  Filter, BooleanField,
  NumberInput,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextInput,
  TextField,
  ReferenceField
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

const PostList = withStyles(stylesCreate)(
  ({ permissions, classes, ...props }) => {
    return (
      <List title="All posts"
        filters={<UserFilter permissions={permissions} />}
        perPage={20}
        sort={{ field: 'title', order: 'ASC' }}
        pagination={<UserPagination />}
        {...props} >
        <Responsive
          small={
            <SimpleList
              primaryText={record => record.title}
              secondaryText={record => `${record.text}`}
              tertiaryText={record => record.isPublished ? 'Published' : ''}
            />
          }
          medium={
            <Datagrid >
              <TextField source="title" formClassName={classes.name} />
              <TextField source="text" formClassName={classes.age} />
              <ReferenceField label="Author" source="author.id" reference="User" linkType="show" >
                <TextField source="name" />
              </ReferenceField >
              <BooleanField source="isPublished" sortable={false} />
              <EditButton />
              <DeleteButton />
              <ShowButton />
            </Datagrid >
          }
        />
      </List >
    )
  })

export default PostList
