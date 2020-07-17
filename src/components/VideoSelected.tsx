import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { VideoValidator } from '../utils'

interface Props {
  video: VideoValidator
}

const useStyles = makeStyles({
  card: {
    padding: '1rem',
    marginTop: '1rem',
  },
  paper: {
    height: '100%',
  },
})

export default function VideoSelected({ video }: Props) {
  const videoSrc = `https://www.youtube.com/embed/${video.id}`
  const classes = useStyles()

  return (
    <Fragment>
      <Paper square={true} className={classes.paper}>
        <iframe
          height='100%'
          width='100%'
          frameBorder='0'
          title='Video Player'
          src={videoSrc}
        />
      </Paper>
      <Card variant='outlined' className={classes.card}>
        <Typography variant='h6'>
          {video.title} - {video.channelTitle}
        </Typography>
        <Typography>{video.description}</Typography>
      </Card>
    </Fragment>
  )
}
