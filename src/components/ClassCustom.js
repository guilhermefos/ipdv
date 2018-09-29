import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing.unit
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
});

const ClassCustom = ({ classes, curso }) => {  
  return (
    <div className={classes.root}>
      <Link
        to={{
          pathname: '/curso-detail',
          state: { curso }
        }}
        style={{ textDecoration: 'none' }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              height="140"
              image={curso.image}
              title={curso.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {curso.title}
              </Typography>
              <Typography component="p">
                {curso.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Detalhes
            </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  )
};

ClassCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  curso: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassCustom);
