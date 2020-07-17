import React from 'react'
import VideoListItem from './VideoListItem'

interface Props {
  videos: Array<{ id: number; title: string }>
}

const VideoList = ({ videos }: Props) => {
  return (
    <div>
      <ul>
        {videos.map((video) => (
          <VideoListItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  )
}

export default VideoList
