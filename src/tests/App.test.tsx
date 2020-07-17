import { render } from '@testing-library/react'
import React from 'react'
import App from '../components/App'

describe('<App />', () => {
  test('should render', () => {
    const { getByTestId } = render(<App />)
    const app = getByTestId('app')
    expect(app).toBeInTheDocument()
  })
})
