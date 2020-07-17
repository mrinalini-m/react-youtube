import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import { VideoValidator } from '../utils'

const useStyles = makeStyles({
  image: {
    paddingRight: '1rem',
  },
  listItemText: {
    fontWeight: 500,
  },
})

interface Props {
  video: VideoValidator
  onVideoSelect: Function
}

export default function VideoListItem({ video, onVideoSelect }: Props) {
  const classes = useStyles()

  const handleClick = () => {
    onVideoSelect(video)
  }

  const thumbnail = (
    <img
      width='100'
      className={classes.image}
      src={video.thumbnails.default.url}
      alt={video.title}
    />
  )
  return (
    <ListItem button divider={true} onClick={handleClick}>
      <ListItemIcon>{thumbnail}</ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        disableTypography={true}
        primary={video.title}
      />
    </ListItem>
  )
}
