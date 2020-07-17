import React, { useState } from 'react'

interface Props {
  onSubmit: Function
}

export default function SearchBar({ onSubmit }: Props) {
  const [searchTerm, setSearchTerm] = useState('Mew Cat')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='video-search'>Video Search</label>
          <input
            onChange={handleChange}
            autoComplete='off'
            name='video-search'
            type='text'
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  )
}
