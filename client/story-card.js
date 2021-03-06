import React from 'react'
import { default as OverFlowEllipsis } from 'react-overflow-ellipsis'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import styles from './styles/styles'

export default function StoryCard({ story, seeMoreInfo }) {
  return (
    <div className="col-1-4">
      <Card className="content" style={styles.storyCard}>
        <CardMedia
          style={styles.media}
          image={story.image}
          title={story.title}
        />
        <CardContent>
          <Typography type="title">
            <OverFlowEllipsis>{story.title}</OverFlowEllipsis>
          </Typography>
          <Typography type="caption" style={styles.captions}>
            <OverFlowEllipsis>By: <strong>{story.author}</strong></OverFlowEllipsis>
          </Typography>
          <Typography type="caption" style={styles.captions}>
            <OverFlowEllipsis>Views: <strong>{story.views}</strong></OverFlowEllipsis>
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" onClick={() => seeMoreInfo(story.id)}>
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
