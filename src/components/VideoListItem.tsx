import React from 'react'

interface Props {
  video: { id: number; title: string }
}

export default function VideoListItem({ video }: Props) {
  return <li>{video.title}</li>
}
