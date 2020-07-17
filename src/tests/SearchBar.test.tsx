import { render } from '@testing-library/react'
import React from 'react'
import SearchBar, { Props } from '../components/SearchBar'

function renderSearchBar(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onSubmit() {
      return
    },
  }
  return render(<SearchBar {...defaultProps} {...props} />)
}

describe('<SearchBar />', () => {
  test('should render', () => {
    const { getByTestId } = renderSearchBar()
    const searchBar = getByTestId('search-bar')
    expect(searchBar).toBeInTheDocument()
  })
  test('should contain a input field wrapper', () => {
    const { getByTestId } = renderSearchBar()
    const searchBar = getByTestId('search-bar')
    const inputWrapper = getByTestId('input-wrapper')
    expect(searchBar).toContainElement(inputWrapper)
  })
})
