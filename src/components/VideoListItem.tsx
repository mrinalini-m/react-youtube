import React from 'react'
import { VideoValidator } from '../utils'

interface Props {
  video: VideoValidator
  onVideoSelect: Function
}

export default function VideoListItem({ video, onVideoSelect }: Props) {
  const handleClick = () => {
    onVideoSelect(video)
  }
  return <li onClick={handleClick}>{video.title}</li>
}
