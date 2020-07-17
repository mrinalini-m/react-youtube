export interface VideoValidator {
  id: string
  description: string
  title: string
  channelTitle: string
  thumbnails: {
    default: {
      url: string
      width: number
      height: number
    }
  }
}

function flattenVideo(video: any): VideoValidator {
  const flattened = {
    id: video.id.videoId,
    description: video.snippet.description,
    title: video.snippet.title,
    channelTitle: video.snippet.channelTitle,
    thumbnails: {
      default: {
        url: video.snippet.thumbnails.default.url,
        width: video.snippet.thumbnails.default.width,
        height: video.snippet.thumbnails.default.height,
      },
    },
  }

  return flattened
}

export function flattenVideos(videos: Array<object>): Array<VideoValidator> {
  const flattenedVids = []
  for (const video of videos) {
    flattenedVids.push(flattenVideo(video))
  }
  return flattenedVids
}
