import React from 'react'
import VideoListItem from './VideoListItem'

interface Props {
  videos: Array<any>
  onVideoSelect: Function
}

const VideoList = ({ videos, onVideoSelect }: Props) => {
  return (
    <div>
      <ul>
        {videos.map((video) => (
          <VideoListItem
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
          />
        ))}
      </ul>
    </div>
  )
}

export default VideoList
