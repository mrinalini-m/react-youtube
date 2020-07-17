import React from 'react'
import { VideoValidator } from '../utils'
import VideoListItem from './VideoListItem'

interface Props {
  videos: Array<VideoValidator>
  onVideoSelect: Function
}

const VideoList = ({ videos, onVideoSelect }: Props) => {
  return (
    <div>
      <ul>
        {videos.map((video) => (
          <VideoListItem
            onVideoSelect={onVideoSelect}
            key={video.id}
            video={video}
          />
        ))}
      </ul>
    </div>
  )
}

export default VideoList
