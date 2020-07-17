import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import youtube from '../api/youtube'
import '../styles/App.css'
import { flattenVideos, VideoValidator } from '../utils'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'
const useStyles = makeStyles({ grid: { justifyContent: 'center' } })

function App() {
  const [videos, setVideos] = useState<Array<VideoValidator>>([])
  const [selectedVideo, setSelectedVideo] = useState<VideoValidator | null>(
    null
  )
  const classes = useStyles()

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  const handleSubmit = async (searchTerm: string) => {
    const videos: Array<object> = await youtube.search(searchTerm)
    setVideos(flattenVideos(videos))
  }

  return (
    <Container>
      <Box my={4}>
        <Grid className={classes.grid} container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item sm={8}>
            {selectedVideo && <VideoSelected video={selectedVideo} />}
          </Grid>
          <Grid item sm={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default App
