import React, { useState } from 'react'
import youtube from '../api/youtube'
import '../styles/App.css'
import { flattenVideos, VideoValidator } from '../utils'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'

function App() {
  const [videos, setVideos] = useState<Array<VideoValidator>>([])
  const [selectedVideo, setSelectedVideo] = useState<VideoValidator | null>(
    null
  )

  const handleSubmit = async (searchTerm: string) => {
    const videos: Array<object> = await youtube.search(searchTerm)
    setVideos(flattenVideos(videos))
  }

  return (
    <div className='App'>
      <SearchBar onSubmit={handleSubmit} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      {selectedVideo && <VideoSelected video={selectedVideo} />}
    </div>
  )
}

export default App
