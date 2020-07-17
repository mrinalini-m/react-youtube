import React, { useState } from 'react'
import youtube from '../api/youtube'
import '../styles/App.css'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async (searchTerm: string) => {
    const videos = await youtube.search(searchTerm)
    console.log(videos)
    setVideos(videos)
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
