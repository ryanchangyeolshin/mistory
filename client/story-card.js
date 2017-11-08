import React from 'react'
import { default as OverFlowEllipsis } from 'react-overflow-ellipsis'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
    maxHeight: 450,
    marginTop: 20
  },
  captions: {
    marginTop: 10
  },
  media: {
    height: 200
  }
}
export default function StoryCard({ story }) {
  return (
    <div className="col-1-4">
      <Card className="content" style={styles.card}>
        <CardMedia
          style={styles.media}
          image={story.image}
          title={story.title}
        />
        <CardContent>
          <Typography type="title" numberOfLines={1} component="h2">
            <OverFlowEllipsis>{story.title}</OverFlowEllipsis>
          </Typography>
          <Typography type="caption" style={styles.captions} component="p">
            <OverFlowEllipsis>By: <strong>{story.author}</strong></OverFlowEllipsis>
          </Typography>
          <Typography type="caption" style={styles.captions} component="p">
            <OverFlowEllipsis>Views: <strong>{story.views}</strong></OverFlowEllipsis>
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">More</Button>
        </CardActions>
      </Card>
    </div>
  )
}
