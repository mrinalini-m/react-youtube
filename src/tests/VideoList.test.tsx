import { render } from '@testing-library/react'
import React from 'react'
import VideoList, { Props } from '../components/VideoList'

function renderVideoList(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onVideoSelect() {
      return
    },
    videos: [],
  }
  return render(<VideoList {...defaultProps} {...props} />)
}

describe('<VideoList />', () => {
  test('should render', () => {
    const { getByTestId } = renderVideoList()
    const videoList = getByTestId('video-list')
    expect(videoList).toBeInTheDocument()
  })
})
