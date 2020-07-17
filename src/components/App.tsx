import React from 'react'
import '../styles/App.css'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'

function createFakeVideos(count: Number) {
  const fakeVideos = []
  for (let i = 0; i < count; i++) {
    fakeVideos.push({ id: i, title: `Video: ${i}` })
  }
  return fakeVideos
}

function App() {
  const fakeVideos = createFakeVideos(5)
  return (
    <div className='App'>
      <SearchBar />
      <VideoList videos={fakeVideos} />
      <VideoSelected />
    </div>
  )
}

export default App
