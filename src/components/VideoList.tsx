import List from '@material-ui/core/List'
import React from 'react'
import { VideoValidator } from '../utils'
import VideoListItem from './VideoListItem'

export interface Props {
  videos: Array<VideoValidator>
  onVideoSelect: Function
}

const VideoList = ({ videos, onVideoSelect }: Props) => {
  return (
    <List data-testid='video-list'>
      {videos.map((video) => (
        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.id}
          video={video}
        />
      ))}
    </List>
  )
}

export default VideoList
