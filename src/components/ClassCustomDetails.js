import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ClassCustom from './ClassCustom';
import SimpleLineChart from '../screens/SimpleLineChart';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  avatar: {
    alignSelf: 'center',
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

const ClassCustomDetails = ({ classes, curso }) => {  
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
        <div className={classes.row}>
          <Avatar
            alt="Adelle Charles"
            src={curso.image}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography style={{ alignSelf: 'center' }} variant="display1" gutterBottom>
            {curso.title}
          </Typography>
          <Typography style={{ alignSelf: 'center' }} variant="body1" gutterBottom>
            {curso.description}
          </Typography>
        </div>
        <Typography variant="display1" gutterBottom>
          Inscrições
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="display1" gutterBottom>
          Cadastros
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="display1" gutterBottom>
          Tempo de Permanência
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
    </main>
  );
};

ClassCustomDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  curso: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(state => ({
    state: state.state
}), null)
)(ClassCustomDetails);
