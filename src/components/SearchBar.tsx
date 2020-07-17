import { makeStyles, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
  form: {
    padding: '1rem',
  },
})
interface Props {
  onSubmit: Function
}

export default function SearchBar({ onSubmit }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
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
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
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
