/* eslint react/jsx-key: off */
import React from 'react'
import {
  BooleanField,
  ReferenceInput,
  SelectInput,
  Show,
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

const PostShow = withStyles(stylesCreate)(({ classes, ...props }) => {
  return (
    <Show title="Show post" {...props}>
      <SimpleShowLayout >
        <TextField source="id" />
        <TextField source="title" formClassName={classes.age} />
        <TextField source="text" formClassName={classes.age} />
        <ReferenceInput
          label="Author"
          source="author.name"
          reference="User"
        >
          <SelectInput optionText="name" />
        </ReferenceInput >
        <BooleanField source="isPublished" />

      </SimpleShowLayout >
    </Show >
  )
})

export default PostShow
