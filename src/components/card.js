import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 200,


  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    //     objectFit: 'cover',
    //       
  },

};

function ImgMediaCard(props) {
  const {
    thumbnail,
    authors,
    title,
    link,
    publisher,
    key
  } = props;

  return (
    <Card key={key} lg={4}style={{ marginBottom: 20, width: 400, margin:10 , height:250 }}>
      <CardActionArea style={{ display: 'flex' }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={thumbnail}
          title={title}
          style={{ maxWidth: '150px' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component="h1">
            {title}
          </Typography >

          <Typography gutterBottom  component="h2">
          Plubisher:
          </Typography>
          <Typography gutterBottom  component="h2">
          {publisher}
          </Typography>
        

          <Button target="_blank" variant='contained' size="small" color="primary" href={link}>
            More Info
        </Button>
        </CardContent>
      </CardActionArea>

    </Card>

  );

}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(ImgMediaCard);
