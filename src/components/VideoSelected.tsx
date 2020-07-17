import React from 'react'
import { VideoValidator } from '../utils'

interface Props {
  video: VideoValidator
}

const VideoDescription = ({ video }: Props) => {
  return (
    <div>
      <p>
        {video.title} - {video.channelTitle}
      </p>
      <p>{video.channelTitle}</p>
      <p>{video.description}</p>
    </div>
  )
}

export default function VideoSelected({ video }: Props) {
  const videoSrc = `https://www.youtube.com/embed/${video.id}`

  return (
    <div>
      <iframe
        frameBorder='0'
        height='535px'
        width='951px'
        title='Video Player'
        src={videoSrc}
      />
      <VideoDescription video={video} />
    </div>
  )
}
