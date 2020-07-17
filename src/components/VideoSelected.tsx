import React from 'react'

interface Props {
  video: any
}

const VideoDescription = ({ video }: Props) => {
  return (
    <div>
      <p>
        {video.snippet.title} - {video.snippet.channelTitle}
      </p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default function VideoSelected({ video }: Props) {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

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
