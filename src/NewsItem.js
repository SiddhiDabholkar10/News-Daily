import React, { Component } from 'react'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
//import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        
        <Card sx={{ maxWidth: 345 }}>
      {/* Card Media: This is for images or media inside the card */}
      <CardMedia
        component="img"
        height="140"
        image= {this.props.imgurl}
        alt="Card Image"
      />
      
      {/* Card Content: This is where the main content of the card goes */}
      <CardContent align="center" >
        <Typography variant="h5" component="div">
        {this.props.title}...
        </Typography>

        <Typography variant="body2" color="text.secondary">
         {this.props.description}...
        </Typography>
        <Typography class="card-text"><small class="text-muted">By {this.props.author}</small></Typography>
        <Typography class="card-text"><small class="text-muted"> on {new Date(this.props.date).toGMTString()}</small></Typography>
      </CardContent>
      
      {/* Card Actions: This is where you can add buttons or action links */}
      <CardActions >
        <Button size="small" color="primary" href={this.props.newsUrl} target="_blank">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </div>
    )
  }
}

export default NewsItem
