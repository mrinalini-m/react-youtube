import React from 'react'

interface Props {
  video: any
  onVideoSelect: Function
}

export default function VideoListItem({ video, onVideoSelect }: Props) {
  const handleClick = () => {
    onVideoSelect(video)
  }
  return <li onClick={handleClick}>{video.snippet.title}</li>
}
