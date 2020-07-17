import { makeStyles, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
  form: {
    padding: '1rem',
  },
})

export interface Props {
  onSubmit: Function
}

export default function SearchBar({ onSubmit }: Props) {
  const [searchTerm, setSearchTerm] = useState<String>('')
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <Paper>
      <form
        data-testid='search-bar'
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <TextField
          data-testid='input-wrapper'
          onChange={handleChange}
          autoComplete='off'
          value={searchTerm}
          id='outlined-basic'
          label='Search'
          variant='outlined'
          size='small'
          fullWidth
        />
      </form>
    </Paper>
  )
}
